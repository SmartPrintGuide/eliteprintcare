import { NextResponse } from 'next/server';

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 60;
const RATE_LIMIT_CACHE = new Map();

function getClientIp(request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  return (
    request.headers.get('x-real-ip') ||
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-vercel-forwarded-for') ||
    'unknown'
  );
}

function getCountry(request) {
  return (
    request.geo?.country ||
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    'unknown'
  );
}

function getRateLimitKey(request) {
  const ip = getClientIp(request);
  const route = request.nextUrl.pathname;
  return `${ip}:${route}`;
}

function applyRateLimit(request) {
  if (!request.nextUrl.pathname.startsWith('/api/')) {
    return null;
  }

  const key = getRateLimitKey(request);
  const now = Date.now();
  const current = RATE_LIMIT_CACHE.get(key);

  if (!current) {
    RATE_LIMIT_CACHE.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return null;
  }

  if (now >= current.resetAt) {
    RATE_LIMIT_CACHE.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return null;
  }

  current.count += 1;
  RATE_LIMIT_CACHE.set(key, current);

  if (current.count > RATE_LIMIT_MAX_REQUESTS) {
    return NextResponse.json(
      {
        success: false,
        message: 'Too many requests. Please try again in a minute.',
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.max(1, Math.ceil((current.resetAt - now) / 1000))),
        },
      }
    );
  }

  return null;
}

export async function middleware(request) {
  const rateLimitedResponse = applyRateLimit(request);

  if (rateLimitedResponse) {
    return rateLimitedResponse;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/|favicon.ico|.*\.(?:png|jpg|jpeg|gif|svg|ico|webp|css|js|woff|woff2|ttf|map)$).*)'],
};
