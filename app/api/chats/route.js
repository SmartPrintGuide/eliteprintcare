import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Chat from '@/lib/models/Chat';
import { authenticate } from '@/lib/auth';

export async function GET(request) {
  try {
    const user = await authenticate(request);
    if (!user) {
      return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
    }

    if (!user.isAdmin) {
      return NextResponse.json({ message: 'Not authorized' }, { status: 403 });
    }

    await dbConnect();
    const chats = await Chat.find().populate('user', 'name email avatar').sort({ updatedAt: -1 });
    return NextResponse.json(chats);
  } catch (error) {
    console.error('Error fetching chats:', error);
    return NextResponse.json({ message: error.message || 'Failed to fetch chats' }, { status: 500 });
  }
}
