// backend/api/productos.js
const { Router } = require('express');
const { productoRouters } = require('../routes/productoRoutes');
const express = require('express');

const app = express();
app.use(express.json());
app.use('/productos', productoRouters);

module.exports = (req, res) => {
  app(req, res);
};
