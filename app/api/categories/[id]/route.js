import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Category from '@/lib/models/Category';
import { authenticate } from '@/lib/auth';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();
    const category = await Category.findById(id);
    if (!category) return NextResponse.json({ message: 'Category not found' }, { status: 404 });
    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();
    const user = await authenticate(request);
    if (!user || !user.isAdmin) return NextResponse.json({ message: 'Not authorized as admin' }, { status: 401 });

    const body = await request.json();
    const category = await Category.findById(id);
    if (!category) return NextResponse.json({ message: 'Category not found' }, { status: 404 });

    category.name = body.name || category.name;
    category.slug = body.slug || category.slug;
    category.image = body.image || category.image;
    category.description = body.description || category.description;

    const updatedCategory = await category.save();
    return NextResponse.json(updatedCategory);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();
    const user = await authenticate(request);
    if (!user || !user.isAdmin) return NextResponse.json({ message: 'Not authorized as admin' }, { status: 401 });

    const category = await Category.findById(id);
    if (!category) return NextResponse.json({ message: 'Category not found' }, { status: 404 });

    await category.deleteOne();
    return NextResponse.json({ message: 'Category removed' });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
