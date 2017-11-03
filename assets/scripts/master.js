var $ = require('jquery');
var verifyDownload = require('./verify-download');
var scrollOnclick = require('./scroll-onclick');
var showHashOnDownload = require('./show-hash-on-download');

$(document).ready(function() {
  verifyDownload();
  scrollOnclick();
  showHashOnDownload();
});
