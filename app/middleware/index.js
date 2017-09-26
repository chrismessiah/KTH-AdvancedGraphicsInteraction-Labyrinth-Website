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

  app.use('/', router); // Register our base-route

  // set our assets folders
  app.use(express.static('public'))
  app.use(express.static('public-webgl'))

  require('../router').getRouter(router, controller);

};
