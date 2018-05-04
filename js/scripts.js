//Business logic

var numberEntered;

function play() {
  for (var range = 1; range <= numberEntered; range++) {
    if (range % 15 == 0) {
      $("#output").append('pingpong  <br/>');

    } else if (range % 5 == 0) {
      $("#output").append('pong  <br/>');

    } else if (range % 3 == 0) {
      $("#output").append('ping  <br/>');

    } else {
      $("#output").append(range.toString() + '<br/>');
    }
  }
}


//UI logic

$(document).ready(function() {
  $("form").submit(function(event) {
    numberEntered = $("input#number").val();
    $("#output").text('');
    play();
    $("input#number").val('');
    event.preventDefault();
  });

});
