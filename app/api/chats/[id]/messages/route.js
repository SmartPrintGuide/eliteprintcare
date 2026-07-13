import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Chat from '@/lib/models/Chat';
import { authenticate } from '@/lib/auth';

export async function POST(request, { params }) {
  try {
    const { id } = await params;
    const user = await authenticate(request);
    if (!user) {
      return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
    }

    const body = await request.json();
    const { message } = body;
    if (!message) {
      return NextResponse.json({ message: 'Message text is required' }, { status: 400 });
    }

    await dbConnect();
    const chat = await Chat.findById(id);
    if (!chat) {
      return NextResponse.json({ message: 'Chat not found' }, { status: 404 });
    }

    if (chat.user.toString() !== user._id.toString() && !user.isAdmin) {
      return NextResponse.json({ message: 'Not authorized to send messages in this chat' }, { status: 403 });
    }

    const newMessage = {
      sender: user._id,
      senderModel: 'User',
      message,
      isRead: false,
      timestamp: new Date(),
    };

    chat.messages.push(newMessage);
    chat.lastMessage = message;
    if (!user.isAdmin) {
      chat.unreadCount += 1;
    }

    await chat.save();
    const updatedChat = await Chat.findById(chat._id).populate('user', 'name email avatar');
    return NextResponse.json(updatedChat);
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json({ message: error.message || 'Failed to send message' }, { status: 500 });
  }
}
