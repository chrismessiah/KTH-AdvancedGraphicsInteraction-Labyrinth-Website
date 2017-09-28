var $ = require('jquery');
var verifyDownload = require('./verify-download');
var scrollOnclick = require('./scroll-onclick');

$(document).ready(function() {
  verifyDownload();
  scrollOnclick();
});
