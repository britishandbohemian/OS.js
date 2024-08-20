const path = require('path');
const root = path.resolve(__dirname, '../../');

module.exports = {
  root,
  port: 8000, // Ensure this port matches the one you use in your server setup
  public: path.resolve(root, 'dist'), // Adjust this path if your build outputs elsewhere
  // Add any additional server configurations as needed
};
