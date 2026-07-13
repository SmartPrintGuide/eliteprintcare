import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Order from '@/lib/models/Order';
import { getUserFromRequest } from '@/lib/auth';

export async function PUT(request, { params }) {
  const { id } = await params;
  const user = await getUserFromRequest(request);
  await dbConnect();
  const order = await Order.findById(id);
  if (!order) {
    return NextResponse.json({ message: 'Order not found' }, { status: 404 });
  }
  if (order.user.toString() !== user._id.toString() && !user.isAdmin) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 403 });
  }

  order.isPaid = true;
  order.paidAt = new Date();
  await order.save();

  return NextResponse.json(order);
}
