import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Order from '@/lib/models/Order';
import { authenticate } from '@/lib/auth';

export async function GET(request, { params }) {
  const { productId } = await params;
  const user = await authenticate(request);
  if (!user) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
  }

  await dbConnect();
  if (user.isAdmin) {
    return NextResponse.json({ canReview: true });
  }

  const order = await Order.findOne({
    user: user._id,
    'orderItems.product': productId,
    isDelivered: true,
  });

  return NextResponse.json({ canReview: !!order });
}
