$(function () {
  $(".mob_menuToggle").click(function () {
    $("#_mobile").toggleClass("ul_toggle");
    $("#menu_mob").toggleClass("toblack");
  });
});

$(function() {
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 200) {
      $(".dsk, #menu_mob").removeClass("tofade");
      $(".dsk, #menu_mob").addClass("toblack");
    } else {
      $(".dsk, #menu_mob").addClass("tofade");
    }
  });
});