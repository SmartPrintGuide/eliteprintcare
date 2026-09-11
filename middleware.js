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

function logRequest(request, response) {
  const timestamp = new Date().toISOString();
  const ip = getClientIp(request);
  const country = getCountry(request);
  const method = request.method;
  const pathname = request.nextUrl.pathname;
  const route = request.nextUrl.pathname + request.nextUrl.search;
  const status = response?.status || 0;

  console.log(
    JSON.stringify({
      timestamp,
      type: 'request-log',
      method,
      pathname,
      route,
      ip,
      country,
      userAgent: request.headers.get('user-agent') || 'unknown',
      status,
      headers: {
        'x-forwarded-for': request.headers.get('x-forwarded-for') || 'unknown',
        'x-real-ip': request.headers.get('x-real-ip') || 'unknown',
        'cf-connecting-ip': request.headers.get('cf-connecting-ip') || 'unknown',
      },
    })
  );
}

function shouldSkipRequestLogging(request) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith('/_next/') || pathname.startsWith('/api/')) {
    return true;
  }

  const prefetchHeaders = [
    request.headers.get('next-router-prefetch'),
    request.headers.get('x-middleware-prefetch'),
    request.headers.get('x-nextjs-data'),
    request.headers.get('purpose'),
  ];

  return prefetchHeaders.some((value) => value === '1' || value === 'prefetch');
}

export async function middleware(request) {
  const shouldSkipLogging = shouldSkipRequestLogging(request);
  const rateLimitedResponse = applyRateLimit(request);

  if (rateLimitedResponse) {
    if (!shouldSkipLogging) {
      logRequest(request, rateLimitedResponse);
    }
    return rateLimitedResponse;
  }

  const response = NextResponse.next();

  if (!shouldSkipLogging) {
    logRequest(request, response);
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/|favicon.ico|.*\.(?:png|jpg|jpeg|gif|svg|ico|webp|css|js|woff|woff2|ttf|map)$).*)'],
};
