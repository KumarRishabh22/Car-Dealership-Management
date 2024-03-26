const DealModel = require('../models/dealModel');

// Get all deals
exports.getAllDeals = async (req, res) => {
  try {
    const deals = await DealModel.find();
    res.json(deals);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get deal by ID
exports.getDealById = async (req, res) => {
  try {
    const deal = await DealModel.findById(req.params.id);
    if (!deal) {
      return res.status(404).json({ message: 'Deal not found' });
    }
    res.json(deal);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Add a new deal
exports.addDeal = async (req, res) => {
  try {
    const { carId, dealInfo } = req.body;

    // Create a new deal instance
    const newDeal = new DealModel({
      carId,
      dealInfo
    });

    // Save the new deal to the database
    await newDeal.save();

    res.status(201).json(newDeal);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update a deal by ID
exports.updateDeal = async (req, res) => {
  try {
    const { carId, dealInfo } = req.body;

    const updatedDeal = {
      carId,
      dealInfo
    };

    // Find the deal by ID and update it
    let deal = await DealModel.findByIdAndUpdate(req.params.id, updatedDeal, { new: true });

    if (!deal) {
      return res.status(404).json({ message: 'Deal not found' });
    }

    res.json(deal);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete a deal by ID
exports.deleteDeal = async (req, res) => {
  try {
    // Find the deal by ID and delete it
    let deal = await DealModel.findByIdAndDelete(req.params.id);

    if (!deal) {
      return res.status(404).json({ message: 'Deal not found' });
    }

    res.json({ message: 'Deal deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
