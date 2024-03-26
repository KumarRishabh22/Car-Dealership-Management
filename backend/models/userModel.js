const mongoose = require('mongoose');

// Define the schema for the user data
const userSchema = new mongoose.Schema({
  user_email: {
    type: String,
    required: true,
    unique: true
  },
  user_id: {
    type: String,
    required: true,
    unique: true
  },
  user_location: {
    type: String,
    required: true
  },
  user_info: {
    type: Object,
    default: {}
  },
  password: {
    type: String,
    required: true
  },
  vehicle_info: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car'
  }]
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);
