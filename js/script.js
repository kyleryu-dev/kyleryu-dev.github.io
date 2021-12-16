$(function() {

  setTimeout(function() {
    $('#name').css('visibility','visible');
    $('#name').css('opacity','1');
  },1800);

  $(window).scroll(function() {

    /* height 추출 */
    var height = $(window).scrollTop();
    console.log(height);

    /* pc scroll_bar Animation */
    if($(window).scrollTop() > 2800) {
      $('#scroll_bar').css('animation-direction','reverse');    
    } else {
      $('#scroll_bar').css('animation-direction','normal');
    }

    /* media Query */
    var windowWidth = window.matchMedia("screen and (max-width: 768px)");
    if (windowWidth.matches) {
      if($(window).scrollTop() > 2000) {
        $('#scroll_bar').css('animation-direction','reverse');    
      } else {
        $('#scroll_bar').css('animation-direction','normal');
      }
    }

  });


});