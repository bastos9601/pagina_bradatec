// backend/api/clientes.js
const { Router } = require('express');
const { clienteRouters } = require('../routes/clienteRoutes');
const express = require('express');

// Creamos la aplicación Express dentro de la función serverless
const app = express();
app.use(express.json());  // Asegúrate de usar middleware para manejar JSON

app.use('/clientes', clienteRouters);

// Exportamos la aplicación Express como una función serverless
module.exports = (req, res) => {
  app(req, res);
};
