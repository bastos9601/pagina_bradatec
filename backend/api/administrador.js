const express = require('express');
const { administradorRouters } = require('../routes/AdministradorRoutes');

const app = express();
app.use(express.json());
app.use('/administrador', administradorRouters);

module.exports = (req, res) => {
  app(req, res);
};
