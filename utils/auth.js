const jwt = require('jsonwebtoken');
const connectDB = require('./db');
const User = require('../models/User');

const authenticate = async (req) => {
  const authHeader = req.headers.authorization || req.headers.Authorization || '';
  if (!authHeader || !authHeader.startsWith('Bearer')) return null;
  const token = authHeader.split(' ')[1];
  try {
    await connectDB();
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    return user;
  } catch (err) {
    return null;
  }
};

module.exports = { authenticate };
