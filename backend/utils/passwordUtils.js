const bcrypt = require('bcrypt');

// Generate a hash of the password
exports.generateHash = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

// Compare the password with the hash
exports.comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
