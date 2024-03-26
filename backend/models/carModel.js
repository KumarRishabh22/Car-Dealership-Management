const mongoose = require('mongoose');

// Define the schema for the car data
const carSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  car_info: {
    type: Object,
    default: {}
  }
});

// Create and export the Car model
module.exports = mongoose.model('Car', carSchema);
