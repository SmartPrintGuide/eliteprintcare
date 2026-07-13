import { NextResponse } from 'next/server';
import { authenticate } from '@/lib/auth';

export async function POST(request) {
  const user = await authenticate(request);
  if (!user) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
  }

  await request.json();

  return NextResponse.json({
    rates: [
      {
        id: 'free-delivery',
        service: 'Free Delivery',
        carrier: 'Elite Print Care',
        rate: '0.00',
        currency: 'USD',
        delivery_days: 'Standard',
      },
    ],
    distance: null,
  });
}
