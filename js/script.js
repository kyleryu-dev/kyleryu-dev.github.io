$(function() {

  setTimeout(function() {
    $('#name').css('visibility','visible');
    $('#name').css('opacity','1');
  },1800);

  $(window).scroll(function() {

    /* height 추출 */
    var height = $(window).scrollTop();
    console.log(height);

    /* section opacity */
    var a =  -1/934 * height + 1;
    $('.wrap_box').eq(0).css('opacity', a);

    var b =  -1/938 * height + 936/469;
    $('.wrap_box').eq(1).css('opacity', b);

    var c =  -1/939 * height + 937/313;
    $('.wrap_box').eq(2).css('opacity', c);

    /* section first scale */
    var x = (-1/9340) * height + 1;
    $('.wrap_box').eq(0).css('transform', `scale( ${x} )`);

    /* pc scroll_bar Animation */
    if($(window).scrollTop() > 2800) {
      $('#scroll_bar').css('animation-direction','reverse');    
    } else {
      $('#scroll_bar').css('animation-direction','normal');
    }

    /* media Query */
    var windowWidth = window.matchMedia("screen and (max-width: 768px)");
    if (windowWidth.matches) {

      /* mobile scroll_bar Animation */
      if($(window).scrollTop() > 2000) {
        $('#scroll_bar').css('animation-direction','reverse');    
      } else {
        $('#scroll_bar').css('animation-direction','normal');
      }

      /* mobile section opacity */
      var a =  -1/668 * height + 1;
      $('.wrap_box').eq(0).css('opacity', a);

      var b =  -1/666 * height + 445/222;
      $('.wrap_box').eq(1).css('opacity', b);

      var c =  -1/665 * height + 2001/665;
      $('.wrap_box').eq(2).css('opacity', c);

      /* section first scale */
      var x = (-1/6680) * height + 1;
      $('.wrap_box').eq(0).css('transform', `scale( ${x} )`);



    }

  });


});