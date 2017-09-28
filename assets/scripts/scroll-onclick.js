var $ = require('jquery');

module.exports = function() {
  $($(".info-container").children("button")).click(function() {
    $('html, body').animate({
        scrollTop: $(".download-banner").offset().top-100
    }, 700);
  })
}
