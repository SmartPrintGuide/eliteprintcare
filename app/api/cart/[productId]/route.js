import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Cart from '@/lib/models/Cart';
import { getUserFromRequest } from '@/lib/auth';

export async function DELETE(request, { params }) {
  const { productId } = await params;
  const user = await getUserFromRequest(request);
  await dbConnect();
  const cart = await Cart.findOne({ user: user._id });
  if (!cart) {
    return NextResponse.json([]);
  }

  cart.cartItems = cart.cartItems.filter((x) => x.product.toString() !== productId);
  await cart.save();
  return NextResponse.json(cart.cartItems);
}
