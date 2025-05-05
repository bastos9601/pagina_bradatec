const express = require('express');
const { pedidoDetalleRouters } = require('../routes/DetallePedidoRoutes');

const app = express();
app.use(express.json());
app.use('/detallePedido', pedidoDetalleRouters);

module.exports = (req, res) => {
  app(req, res);
};
