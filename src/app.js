const path = require('path');
const express = require('express');

// setup express app
const app = express();
const port = process.env.PORT || 3000;

// set publicDir for express config
const publicDir = path.resolve(__dirname, '../public')

// setup express static views
app.use(express.static(publicDir));

// route handlers
app.get('/greet', (req,res) => {
  res.json({
    message: 'Hello, express!'
  })
})

// setup app.listen
app.listen(port, () => {
  console.log(`server is up and running on port ${port}`)
})