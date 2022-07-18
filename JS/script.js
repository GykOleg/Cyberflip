$(function () {
   $(".mobile-menu__body").hide();
   $(".header__menu").click(function () {
      $(".mobile-menu__body").slideToggle(500);
   });
   $(".slider").slick({
      dots: true
   });
   $(".footer__title-small").click(function () {
      $(this).toggleClass("active").next().slideToggle(500);
   });
});