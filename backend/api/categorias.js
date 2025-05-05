const express = require('express');
const { categoriaRouters } = require('../routes/categoriaRoutes');

const app = express();
app.use(express.json());
app.use('/categorias', categoriaRouters);

module.exports = (req, res) => {
  app(req, res);
};
