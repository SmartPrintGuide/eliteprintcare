import { NextResponse } from 'next/server';
import axios from 'axios';
import dbConnect from '@/lib/db';
import Order from '@/lib/models/Order';
import { authenticate } from '@/lib/auth';

export async function POST(request) {
  const user = await authenticate(request);
  if (!user) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
  }

  const body = await request.json();
  const { amount, orderId, source } = body;
  if (!amount || !orderId || !source) {
    return NextResponse.json({ message: 'Missing payment data' }, { status: 400 });
  }

  const cloverUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://api.clover.com/v1/charges'
      : 'https://sandbox.dev.clover.com/v1/charges';

  try {
    const response = await axios.post(
      cloverUrl,
      {
        amount: Math.round(amount * 100),
        currency: 'USD',
        source,
        metadata: { orderId },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CLOVER_PRIVATE_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.data || !response.data.id) {
      return NextResponse.json({ message: 'Clover payment failed' }, { status: 400 });
    }

    await dbConnect();
    const order = await Order.findById(orderId);
    if (!order) {
      return NextResponse.json({ message: 'Order not found' }, { status: 404 });
    }

    order.isPaid = true;
    order.paidAt = new Date();
    order.paymentResult = {
      id: response.data.id,
      status: response.data.status,
    };
    await order.save();

    return NextResponse.json({ success: true, message: 'Payment successful', payment: response.data });
  } catch (error) {
    const cloverErr = error.response?.data;
    let reason = 'Payment failed';
    if (cloverErr?.error?.message) {
      reason = cloverErr.error.message;
    } else if (cloverErr?.message) {
      reason = cloverErr.message;
    } else if (error.message) {
      reason = error.message;
    }
    return NextResponse.json({ message: `Payment failed: ${reason}` }, { status: 400 });
  }
}
