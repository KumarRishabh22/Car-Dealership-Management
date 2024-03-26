const DealershipModel = require('../models/dealershipModel');

// Get all dealerships
exports.getAllDealerships = async (req, res) => {
  try {
    const dealerships = await DealershipModel.find();
    res.json(dealerships);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get dealership by ID
exports.getDealershipById = async (req, res) => {
  try {
    const dealership = await DealershipModel.findById(req.params.id);
    if (!dealership) {
      return res.status(404).json({ message: 'Dealership not found' });
    }
    res.json(dealership);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Add a new dealership
exports.addDealership = async (req, res) => {
  try {
    const { email, name, location, password, dealershipInfo } = req.body;

    // Create a new dealership instance
    const newDealership = new DealershipModel({
      email,
      name,
      location,
      password,
      dealershipInfo
    });

    // Save the new dealership to the database
    await newDealership.save();

    res.status(201).json(newDealership);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update a dealership by ID
exports.updateDealership = async (req, res) => {
  try {
    const { email, name, location, password, dealershipInfo } = req.body;

    const updatedDealership = {
      email,
      name,
      location,
      password,
      dealershipInfo
    };

    // Find the dealership by ID and update it
    let dealership = await DealershipModel.findByIdAndUpdate(req.params.id, updatedDealership, { new: true });

    if (!dealership) {
      return res.status(404).json({ message: 'Dealership not found' });
    }

    res.json(dealership);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete a dealership by ID
exports.deleteDealership = async (req, res) => {
  try {
    // Find the dealership by ID and delete it
    let dealership = await DealershipModel.findByIdAndDelete(req.params.id);

    if (!dealership) {
      return res.status(404).json({ message: 'Dealership not found' });
    }

    res.json({ message: 'Dealership deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
