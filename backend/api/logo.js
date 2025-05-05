const express = require('express');
const { logoRouters } = require('../routes/logoRoutes');

const app = express();
app.use(express.json());
app.use('/logo', logoRouters);

module.exports = (req, res) => {
  app(req, res);
};
