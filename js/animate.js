$( document ).ready(function() {
$("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
    $(".red").animate({
      left: "-=1"
    });
  }
  else if(e.keyCode == 39) { // right
    $(".red").animate({
      left: "+=1"
    });
  }
});
});