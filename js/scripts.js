//business logic
 var countTonumber;
function condition() {
 for (var count = 1; count <= countTonumber; count++) {
   if (count % 15 == 0) {
          $("#output").append('pingpong  <br/>');

   } else if (count % 5 == 0) {
               $("#output").append('pong  <br/>');

   } else if (count % 3 == 0) {
     $("#output").append('ping  <br/>');

   } else {
     $("#output").append(count.toString() +'<br/>');
   }

 }
}


//UI logic

$(document).ready(function(){
$("form").submit(function(event){
countTonumber=$("input#number").val();
$("#output").text('');
condition();
$("input#number").val('');
event.preventDefault();
});

});
