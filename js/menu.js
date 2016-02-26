



$(function() {
  $('#menu').hover(function() {
    $('#myCarousel').css('transition', 'opacity 1s');
    $('#myCarousel').css('opacity', '0.2');
    $('#menu').css('opacity','1!important');	
  }, function() {
    // on mouseout, reset the background colour
    $('#myCarousel').css('opacity', '1');
  });
});




