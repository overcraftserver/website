$(function() {
  $(window).on("scroll", function() {
    var value = 200;
    if($(window).scrollTop() > value) {
      $(".dsk, #menu_mob").removeClass("tofade");
      $(".dsk, #menu_mob").addClass("toblack");
      $(".mob_menuToggle").click(function () {
        $("#menu_mob").removeClass("tofade");
      });
    } else {
      $(".dsk, #menu_mob").addClass("tofade");
      $(".mob_menuToggle").click(function () {
        $("#menu_mob").toggleClass("toblack");
      });
    }
  });
});