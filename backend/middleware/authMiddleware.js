const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const AdminModel = require('../models/adminModel');

// Middleware to authenticate user's access token
exports.authenticateUser = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token is missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = await UserModel.findById(decoded.userId);
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(403).json({ message: 'Invalid token' });
  }
};

// Middleware to authenticate admin's access token
exports.authenticateAdmin = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token is missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.admin = await AdminModel.findById(decoded.adminId);
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(403).json({ message: 'Invalid token' });
  }
};
