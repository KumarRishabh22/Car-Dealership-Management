const mongoose = require('mongoose');

// Define the schema for the deal data
const dealSchema = new mongoose.Schema({
  car_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  },
  deal_info: {
    type: Object,
    default: {}
  }
});

// Create and export the Deal model
module.exports = mongoose.model('Deal', dealSchema);
