import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Category from '@/lib/models/Category';
import Product from '@/lib/models/Product';
import { authenticate } from '@/lib/auth';

export async function GET() {
  try {
    await connectDB();
    const categories = await Category.find({});
    const categoriesWithCounts = await Promise.all(categories.map(async (category) => {
      const count = await Product.countDocuments({ category: category._id });
      return { ...category.toObject(), count };
    }));
    return NextResponse.json(categoriesWithCounts);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const user = await authenticate(request);
    if (!user || !user.isAdmin) return NextResponse.json({ message: 'Not authorized as admin' }, { status: 401 });

    const body = await request.json();
    const { name, slug, image, description } = body;
    if (!name) return NextResponse.json({ message: 'Category name is required' }, { status: 400 });

    const generatedSlug = slug || name.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, '-');
    const category = await Category.create({ name, slug: generatedSlug, image, description });
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
