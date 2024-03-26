// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express application
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Routes setup
const authRoutes = require('./routes/authRoutes');
const carRoutes = require('./routes/carRoutes');
const dealRoutes = require('./routes/dealRoutes');
const dealershipRoutes = require('./routes/dealershipRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/car', carRoutes);
app.use('/api/deal', dealRoutes);
app.use('/api/dealership', dealershipRoutes);
app.use('/api/user', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
