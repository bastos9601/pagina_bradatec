const express = require('express');
const { estadoPedidoRouters } = require('../routes/EstadoPedidoRoutes');

const app = express();
app.use(express.json());
app.use('/estadoPedido', estadoPedidoRouters);

module.exports = (req, res) => {
  app(req, res);
};
