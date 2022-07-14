$(function () {
   $(".header__menu").click(function () {
      $(".mobile-menu__body").toggleClass("menu-open");
   });
   $(".footer__title-small").click(function () {
      $(this).toggleClass("active").next().slideToggle(500);
   });
});