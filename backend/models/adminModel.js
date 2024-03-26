const mongoose = require('mongoose');

// Define the schema for the admin data
const adminSchema = new mongoose.Schema({
  admin_id: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create and export the Admin model
module.exports = mongoose.model('Admin', adminSchema);
