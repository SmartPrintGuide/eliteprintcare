import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Cart from '@/lib/models/Cart';
import Product from '@/lib/models/Product';
import { getUserFromRequest } from '@/lib/auth';

export async function GET(request) {
  const user = await getUserFromRequest(request);
  await dbConnect();
  const cart = await Cart.findOne({ user: user._id });
  return NextResponse.json(cart ? cart.cartItems : []);
}

export async function POST(request) {
  const user = await getUserFromRequest(request);
  const body = await request.json();
  const { product, qty } = body;
  if (!product || !qty) {
    return NextResponse.json({ message: 'Product and qty required' }, { status: 400 });
  }

  await dbConnect();
  let cart = await Cart.findOne({ user: user._id });
  const prod = await Product.findById(product);
  if (!prod) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  const item = {
    product: prod._id,
    qty,
    title: prod.title,
    image: prod.images?.length > 0 ? prod.images[0] : '',
    price: prod.price,
    slug: prod.slug,
  };

  if (!cart) {
    cart = new Cart({ user: user._id, cartItems: [item] });
  } else {
    const existIdx = cart.cartItems.findIndex((x) => x.product.toString() === product);
    if (existIdx > -1) {
      cart.cartItems[existIdx] = item;
    } else {
      cart.cartItems.push(item);
    }
  }

  await cart.save();
  return NextResponse.json(cart.cartItems);
}

export async function DELETE(request) {
  const user = await getUserFromRequest(request);
  await dbConnect();
  const cart = await Cart.findOne({ user: user._id });
  if (cart) {
    cart.cartItems = [];
    await cart.save();
  }
  return NextResponse.json([]);
}
