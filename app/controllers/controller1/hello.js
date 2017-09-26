'use strict';

module.exports = function(req, res) {
  res.json({message: 'Hello World!', file: __filename});
};
