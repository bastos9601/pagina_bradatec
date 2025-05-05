const express = require('express');
const { facturaRouters } = require('../routes/FacturaRoutes');

const app = express();
app.use(express.json());
app.use('/factura', facturaRouters);

module.exports = (req, res) => {
  app(req, res);
};
