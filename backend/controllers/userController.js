const UserModel = require('../models/userModel');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Add a new user
exports.addUser = async (req, res) => {
  try {
    const { email, location, userInfo, password, vehicleInfo } = req.body;

    // Create a new user instance
    const newUser = new UserModel({
      email,
      location,
      userInfo,
      password,
      vehicleInfo
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
  try {
    const { email, location, userInfo, password, vehicleInfo } = req.body;

    const updatedUser = {
      email,
      location,
      userInfo,
      password,
      vehicleInfo
    };

    // Find the user by ID and update it
    let user = await UserModel.findByIdAndUpdate(req.params.id, updatedUser, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    // Find the user by ID and delete it
    let user = await UserModel.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
