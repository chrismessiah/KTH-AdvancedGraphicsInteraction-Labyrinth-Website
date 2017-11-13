var $ = require('jquery');
var verifyDownload = require('./verify-download');
var scrollOnclick = require('./scroll-onclick');
var showHashOnDownload = require('./show-hash-on-download');
var slickSlider = require('./slick-slider');
var scrollReveal = require('./scroll-reveal');

$(document).ready(function() {
  verifyDownload();
  scrollOnclick();
  showHashOnDownload();
  slickSlider();
  scrollReveal();
});
