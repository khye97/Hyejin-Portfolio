$(window).on("scroll", function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop >= 80) {
    $("header").addClass("active");
  } else if (scrollTop < 80) {
    $("header").removeClass("active");
  }
});
