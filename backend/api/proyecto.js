const express = require('express');
const { proyectoRouters } = require('../routes/ProyectoRoutes');

const app = express();
app.use(express.json());
app.use('/proyecto', proyectoRouters);

module.exports = (req, res) => {
  app(req, res);
};
