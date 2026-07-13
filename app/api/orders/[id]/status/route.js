import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Order from '@/lib/models/Order';
import { getUserFromRequest } from '@/lib/auth';

export async function PUT(request, { params }) {
  const { id } = await params;
  const user = await getUserFromRequest(request);
  if (!user.isAdmin) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 403 });
  }

  await dbConnect();
  const order = await Order.findById(id);
  if (!order) {
    return NextResponse.json({ message: 'Order not found' }, { status: 404 });
  }

  const body = await request.json();
  if (body.status) {
    order.status = body.status;
    await order.save();
    return NextResponse.json(order);
  }

  return NextResponse.json({ message: 'Status is required' }, { status: 400 });
}
