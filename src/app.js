const path = require('path');
const express = require('express');

// setup express app
const app = express();
const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDir = path.resolve(__dirname, '../public');

// Setup static directory to serve
app.use(express.static(publicDir));

//route handlers
app.get('/test', (req, res) => {
  res.json('Hello, express!')
})

//listener
app.listen(port, () => {
  console.log(`server is up on port ${port}`)
});