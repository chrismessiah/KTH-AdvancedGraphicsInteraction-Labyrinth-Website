var $ = require('jquery');

module.exports = function() {
  $($(".download-bar").children("a")).click(function() {
    $('.download-hashes').animate({
        opacity: 1
    }, 700);
  })
}
