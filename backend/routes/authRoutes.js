const express = require('express');
const router = express.Router();
const { signup, login, refreshToken, logout, changePassword } = require('../controllers/authController');
const { validateSignup, validateLogin } = require('../middleware/validationMiddleware');

// Routes for user authentication
router.post('/signup', validateSignup, signup);
router.post('/login', validateLogin, login);
router.post('/refresh-token', refreshToken);
router.post('/logout', logout);
router.put('/change-password', changePassword);

module.exports = router;
