$(function () {
  $(".mob_menuToggle").click(function () {
    $("#_mobile").toggleClass("ul_toggle");
  });
});

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 200) {
            $("#menu").removeClass("tofade");
            $("#menu").addClass("toblack");
        } else {
            $("#menu").addClass("tofade");
        }
    });
});