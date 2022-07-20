$(function () {
   setTimeout(function () {
      $(".loading__middle").slideUp(300);
      setTimeout(function () {
         $(".loading").fadeToggle(700);
         $(".body").removeClass("scroll-lock");
      }, 500);
   }, 10000);
   $(".mobile-menu__body").hide();
   $(".header__menu").click(function () {
      $(".mobile-menu__body").slideToggle(500);
   });
   $(".slider").slick({
      dots: true
   });
   if (window.matchMedia('all and (max-width: 900px').matches) {
      $(".footer__title-small").click(function () {
         $(this).toggleClass("active").next().slideToggle(500);
      });
   }
});