const express = require('express');
const { empleadoRouters } = require('../routes/EmpleadoRoutes');

const app = express();
app.use(express.json());
app.use('/empleado', empleadoRouters);

module.exports = (req, res) => {
  app(req, res);
};
