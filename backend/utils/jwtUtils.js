const jwt = require('jsonwebtoken');

// Generate an access token
exports.generateAccessToken = (userId, expiresIn = '15m') => {
  return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn });
};

// Generate a refresh token
exports.generateRefreshToken = (userId, expiresIn = '7d') => {
  return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn });
};

// Verify an access token
exports.verifyAccessToken = (token) => {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
};

// Verify a refresh token
exports.verifyRefreshToken = (token) => {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
};
