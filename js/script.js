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
    var a = -1/934 * height + 1;
    $('.wrap_box').eq(0).css('opacity',a);

    var b = -1/938 * height + 936/469;
    $('.wrap_box').eq(1).css('opacity',b);

    var c = -1/939 * height + 937/313;
    $('.wrap_box').eq(2).css('opacity',c);

    /* section1 scale */
    var x = (-1/9340) * height + 1;
    $('.wrap_box').eq(0).css('transform',`scale( ${x} )`);

    /* pc scroll_bar Animation */
    if($(window).scrollTop() > 2600) {
      $('#scroll_bar').css('animation-direction','reverse');    
    } else {
      $('#scroll_bar').css('animation-direction','normal');
    }

    /* media Query - Ipad pro */
    var windowWidth = window.matchMedia("screen and (max-width: 1024px)");
    if (windowWidth.matches) {

      /* tablet scroll_bar Animation */
      if($(window).scrollTop() > 4080) {
        $('#scroll_bar').css('animation-direction','reverse');    
      } else {
        $('#scroll_bar').css('animation-direction','normal');
      }

      /* tablet section opacity */
      var a = -1/1366 * height + 1;
      $('.wrap_box').eq(0).css('opacity',a);

      var b = -1/1004 * height + 1185/502;
      $('.wrap_box').eq(1).css('opacity',b);

      var c = -1/1368 * height + 683/228;
      $('.wrap_box').eq(2).css('opacity',c);

      /* section1 scale */
      var x = (-1/6680) * height + 1;
      $('.wrap_box').eq(0).css('transform','scale( ${x} )');

    }
    /* //media Query - Ipad pro */

    /* media Query - Ipad */
    var windowWidth = window.matchMedia("screen and (max-width: 768px)");
    if (windowWidth.matches) {

      /* tablet scroll_bar Animation */
      if($(window).scrollTop() > 3070) {
        $('#scroll_bar').css('animation-direction','reverse');    
      } else {
        $('#scroll_bar').css('animation-direction','normal');
      }

      /* tablet section opacity */
      var a = -1/1024 * height + 1;
      $('.wrap_box').eq(0).css('opacity',a);

      var b = -1/1022 * height + 1023/511;
      $('.wrap_box').eq(1).css('opacity',b);

      var c = -1/1026 * height + 512/171;
      $('.wrap_box').eq(2).css('opacity',c);

      /* section1 scale */
      var x = (-1/6680) * height + 1;
      $('.wrap_box').eq(0).css('transform','scale( ${x} )');

    }
    /* //media Query - Ipad */

    /* media Query - mobile */
    var windowWidth = window.matchMedia("screen and (max-width: 576px)");
    if (windowWidth.matches) {

      /* mobile scroll_bar Animation */
      if($(window).scrollTop() > 2000) {
        $('#scroll_bar').css('animation-direction','reverse');    
      } else {
        $('#scroll_bar').css('animation-direction','normal');
      }

      /* mobile section opacity */
      var a = -1/668 * height + 1;
      $('.wrap_box').eq(0).css('opacity',a);

      var b = -1/666 * height + 445/222;
      $('.wrap_box').eq(1).css('opacity',b);

      var c = -1/665 * height + 2001/665;
      $('.wrap_box').eq(2).css('opacity',c);

      /* section1 scale */
      var x = (-1/6680) * height + 1;
      $('.wrap_box').eq(0).css('transform','scale( ${x} )');

    }
    /* //media Query - mobile */



  });
  /* //scroll function */


});
/* //ready function */