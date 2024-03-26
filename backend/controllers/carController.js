const CarModel = require('../models/carModel');

// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await CarModel.find();
    res.json(cars);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get car by ID
exports.getCarById = async (req, res) => {
  try {
    const car = await CarModel.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Add a new car
exports.addCar = async (req, res) => {
  try {
    const { type, name, model, carInfo } = req.body;

    // Create a new car instance
    const newCar = new CarModel({
      type,
      name,
      model,
      carInfo
    });

    // Save the new car to the database
    await newCar.save();

    res.status(201).json(newCar);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update a car by ID
exports.updateCar = async (req, res) => {
  try {
    const { type, name, model, carInfo } = req.body;

    const updatedCar = {
      type,
      name,
      model,
      carInfo
    };

    // Find the car by ID and update it
    let car = await CarModel.findByIdAndUpdate(req.params.id, updatedCar, { new: true });

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.json(car);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete a car by ID
exports.deleteCar = async (req, res) => {
  try {
    // Find the car by ID and delete it
    let car = await CarModel.findByIdAndDelete(req.params.id);

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.json({ message: 'Car deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
