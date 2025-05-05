// backend/api/pedidos.js
const { Router } = require('express');
const { pedidoRouters } = require('../routes/pedidoRoutes');
const express = require('express');

const app = express();
app.use(express.json());
app.use('/pedidos', pedidoRouters);

module.exports = (req, res) => {
  app(req, res);
};
