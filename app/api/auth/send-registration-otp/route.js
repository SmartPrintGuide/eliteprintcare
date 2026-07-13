import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import bcrypt from 'bcryptjs';
import User from '@/lib/models/User';
import OTP from '@/lib/models/OTP';
import { generateOTP, sendOTPEmail } from '@/lib/emailService';

export async function POST(request) {
  try {
    await connectDB();
    const { firstName, lastName, email, password } = await request.json();
    const trimmedEmail = email ? email.trim().toLowerCase() : '';

    if (!firstName || !lastName || !trimmedEmail || !password) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const existingUser = await User.findOne({ email: trimmedEmail });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const otp = generateOTP();
    console.log('Generated OTP:', otp, 'for email:', trimmedEmail);

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    
    try {
      await sendOTPEmail(trimmedEmail, otp, 'registration');
      console.log('OTP email sent successfully');
    } catch (emailError) {
      console.error('Email sending error:', emailError.message);
      // Continue even if email fails - OTP is still saved
    }

    await OTP.findOneAndDelete({ email: trimmedEmail, type: 'registration' });

    const otpDoc = await OTP.create({
      email: trimmedEmail,
      otp,
      type: 'registration',
      registrationData: { firstName, lastName, passwordHash },
    });
    
    console.log('OTP document created:', otpDoc._id);

    return NextResponse.json({ message: 'OTP sent to your email' });
  } catch (error) {
    console.error('Send OTP Error:', error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
