'use strict';

const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');

module.exports = function(app) {
  require('./add-env-vars');

  app.use(compression());
  app.use(bodyParser.json({ type: 'application/json'}));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.set('port', process.env.PORT || 3000);
  app.use(bodyParser.text());

  app.use(require('./add-utils'));
  let controller = require('./add-controllers');
  let router = express.Router();
  app.use('/api', router); // Register our base-route
  require('../router').getRouter(router, controller);

};
