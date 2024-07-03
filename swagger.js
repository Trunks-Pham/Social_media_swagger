// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API with Swagger for SOCIAL MEDIA',
    version: '1.0.0',
    description: 'Swagger API for SOCIAL MEDIA',
  },
  servers: [
    {
      url: 'http://localhost:4000',
      description: 'Local server - API SOCIAL MEDIA',
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: [path.join(__dirname, 'src/routers/**/*.js')], // Ensure the path is correct
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
