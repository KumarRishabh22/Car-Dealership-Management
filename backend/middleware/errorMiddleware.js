// Middleware to handle errors
exports.handleError = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  };
  
  // Middleware to handle not found routes
  exports.handleNotFound = (req, res) => {
    res.status(404).json({ message: 'Not Found' });
  };
  