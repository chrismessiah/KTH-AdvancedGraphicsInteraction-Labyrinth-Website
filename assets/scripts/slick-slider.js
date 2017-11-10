var $ = require('jquery');
var slick = require('slick-carousel');

module.exports = function() {
  $('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    autoplaySpeed: 2500,
    autoplay: true,
  });
}
