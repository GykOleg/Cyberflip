$(function () {
   //loading screen
   setTimeout(function () {
      $(".loading__middle").slideUp(300);
      setTimeout(function () {
         $(".loading").fadeToggle(700);
         $(".body").removeClass("scroll-lock");
      }, 500);
   }, 5000);
   //$(".loading").fadeToggle(700);
   //$(".body").removeClass("scroll-lock");
   //burger menu
   $(".mobile-menu__body").hide();
   $(".header__menu").click(function () {
      $(".mobile-menu__body").slideToggle(500);
   });
   //slider
   const Resize = () => {
      if ($(window).width() > 900) {
         $(".slider").slick({
            dots: true
         });
         $(".works-slider").slick({
            dots: true
         });
      } else {
         $(".slider").slick();
         $(".works-slider").slick();
         $(".footer__title-small").click(function () {
            $(this).toggleClass("active").next().slideToggle(500);
         });
      };
      console.log($(window).width());
   };
   Resize();
   $(window).on('resize', function () {
      Resize();
   });
});