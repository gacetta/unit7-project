const path = require('path');
const express = require('express');

// setup express app
const app = express();
const path = process.env.PORT || 3000;

// Define paths for Express config
const publicDir = path.resolve(__dirname, '../public')

// Setup handlebars engine, views and partials locations

// Setup static directory to serve

//route handlers

//listener
app.listen(port, () => {
  console.log(`server is up on port ${port}`)
});