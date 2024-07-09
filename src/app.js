const express = require("express");
const bodyParser = require("body-parser");
const setupSwagger = require('./swagger'); // Đảm bảo đường dẫn chính xác tới file swagger.js
const cors = require('cors');
const app = express();
app.use(bodyParser.json());

require('dotenv').config();
// Connect to MongoDB
require('./dbs/mongo');

// Cấu hình sử dụng CORS middleware
app.use(cors({
  origin: 'http://localhost:4000', // Cập nhật domain và port của Swagger UI
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Các phương thức HTTP cho phép
  allowedHeaders: ['Content-Type', 'Authorization'], // Các headers cho phép
}));
const port = 4000;
// Set up routers
app.use(require('./routers'));

// Setup Swagger
setupSwagger(app);

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'server is ok'
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
