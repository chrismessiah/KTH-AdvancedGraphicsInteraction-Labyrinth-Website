'use strict';

const path = require('path');

module.exports = function(req, res) {
  res.sendFile('index.html', {root: __dirname});
};
