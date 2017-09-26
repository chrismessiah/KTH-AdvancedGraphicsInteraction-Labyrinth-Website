'use strict';

let SQLFunction = require('../utils/connect-to-db');

module.exports = function(req, res, next) {
  req.sql = SQLFunction.bind(this, req);
  next();
}
