const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000; // Port number, use environment variable if available

// Define a route
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client')));

app.get('/dist/bundle.js', (req, res) => {
  res.set('Content-Type', 'application/javascript');
  res.sendFile(path.join(__dirname, '../dist/bundle.js'));
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});