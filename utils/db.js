const mongoose = require('mongoose');
require('dotenv').config({ path: process.cwd() + '/.env' });

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected (Next.js)');
  } catch (error) {
    console.error('❌ MongoDB connection error (Next.js)');
    console.error(error.message);
    throw error;
  }
};

module.exports = connectDB;
