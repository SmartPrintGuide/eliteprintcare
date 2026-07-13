import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Order from '@/lib/models/Order';
import Product from '@/lib/models/Product';
import Cart from '@/lib/models/Cart';
import { getUserFromRequest } from '@/lib/auth';

export async function GET(request) {
  const user = await getUserFromRequest(request);
  if (!user) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
  }
  await dbConnect();

  if (user.isAdmin) {
    const url = new URL(request.url);
    const search = url.searchParams.get('search') || '';
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = Number(url.searchParams.get('limit') || 20);

    const query = search
      ? {
          $or: [
            { status: { $regex: search, $options: 'i' } },
            { 'shippingAddress.address': { $regex: search, $options: 'i' } },
            { 'shippingAddress.city': { $regex: search, $options: 'i' } },
            { 'shippingAddress.postalCode': { $regex: search, $options: 'i' } },
            { 'shippingAddress.country': { $regex: search, $options: 'i' } },
          ],
        }
      : {};

    const count = await Order.countDocuments(query);
    const orders = await Order.find(query)
      .populate('user', 'name email')
      .sort({ createdAt: -1 })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    return NextResponse.json({ orders, page, pages: Math.ceil(count / pageSize), total: count });
  }

  const orders = await Order.find({ user: user._id }).populate('user', 'name email').sort({ createdAt: -1 });
  return NextResponse.json(orders);
}

export async function POST(request) {
  const user = await getUserFromRequest(request);
  if (!user) {
    return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
  }

  const body = await request.json();
  const {
    cartItems: rawCartItems,
    orderItems: rawOrderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice,
  } = body;

  const cartItems = rawCartItems || rawOrderItems || [];

  if (!cartItems || cartItems.length === 0) {
    return NextResponse.json({ message: 'No order items' }, { status: 400 });
  }

  await dbConnect();

  const orderItems = await Promise.all(
    cartItems.map(async (item) => {
      const product = await Product.findById(item.product);
      return {
        ...item,
        product: product?._id,
      };
    })
  );

  const order = new Order({
    user: user._id,
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice,
  });

  await order.save();

  await Cart.findOneAndUpdate({ user: user._id }, { cartItems: [] });

  return NextResponse.json(order);
}
