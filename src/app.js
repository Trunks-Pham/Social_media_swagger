const express = require("express");
const bodyParser = require("body-parser");
const configureSwagger = require('../swagger'); // Ensure the correct path to swagger.js
const app = express();

app.use(bodyParser.json());

require('dotenv').config();

// Configure Swagger
configureSwagger(app);

app.get('/', (req, res) => {
  res.send('Chào mừng bạn đế SOCIAL MEDIA with Swagger hãy nhập http://localhost:4000/api-docs!');
});

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
  console.log('API docs available at http://localhost:4000/api-docs');
});

// Connect to the database
require('./dbs/mongo');

// Set up routers
app.use(require('../src/routers'));

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'server is ok'
  });
});

module.exports = app;
