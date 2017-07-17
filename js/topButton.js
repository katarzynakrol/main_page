$(function(){
   var stt_is_shown = false;
   $(window).scroll(function(){
      var win_height = 100;
      var scroll_top = $(document).scrollTop();
      if (scroll_top > win_height && !stt_is_shown) {
         stt_is_shown = true;
         $(".top").fadeIn();
      } else if (scroll_top < win_height && stt_is_shown) {
         stt_is_shown = false;
         $(".top").fadeOut();
      }
  });
  $(".top").click(function(e){
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, 1300);
   });
});
