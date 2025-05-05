const express = require('express');
const { historialEstadoRouters } = require('../routes/HistorialEstadoRoutes');

const app = express();
app.use(express.json());
app.use('/historialEstado', historialEstadoRouters);

module.exports = (req, res) => {
  app(req, res);
};
