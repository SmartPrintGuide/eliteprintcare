import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Chat from '@/lib/models/Chat';
import { authenticate } from '@/lib/auth';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const user = await authenticate(request);
    if (!user) {
      return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
    }

    await dbConnect();
    const chat = await Chat.findById(id).populate('user', 'name email avatar');
    if (!chat) {
      return NextResponse.json({ message: 'Chat not found' }, { status: 404 });
    }

    if (chat.user._id.toString() !== user._id.toString() && !user.isAdmin) {
      return NextResponse.json({ message: 'Not authorized to access this chat' }, { status: 403 });
    }

    return NextResponse.json(chat);
  } catch (error) {
    console.error('Error fetching chat:', error);
    return NextResponse.json({ message: error.message || 'Failed to fetch chat' }, { status: 500 });
  }
}
