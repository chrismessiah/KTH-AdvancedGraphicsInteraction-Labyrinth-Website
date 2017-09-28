var $ = require('jquery');
var swal = require('sweetalert');

module.exports = function() {
  var childs = $('.download-bar').children();
  for (var i = 0; i < childs.length; i++) {
    var child = childs[i];
    var url = child.href;
    url = url.replace("http://localhost:3000/", "").replace("http://labyrinth.christianabdelmassih.com/", "");
    if (url.length === 0) {
      $(child).click(function(e) {
        e.preventDefault();
        swal("Not available" ,  "Labyrinth is currently not available for this OS. Feel free to try out the WebGL version in your browser instead." ,  "warning")
      })
    }
  }
}
