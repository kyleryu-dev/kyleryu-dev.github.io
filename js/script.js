$(function() {

  setTimeout(function() {
    $('#name').css('visibility','visible');
    $('#name').css('opacity','1');
  },1800);

  $(window).scroll(function() {
    if($(window).scrollTop() > 2800) {
      $('#scroll_bar').css('animation-direction','reverse');    
    } else {
      $('#scroll_bar').css('animation-direction','normal');
    }
  });

});