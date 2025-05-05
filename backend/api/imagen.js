const express = require('express');
const { imagenRouters } = require('../routes/ImagenRoutes');

const app = express();
app.use(express.json());
app.use('/imagen', imagenRouters);

module.exports = (req, res) => {
  app(req, res);
};
