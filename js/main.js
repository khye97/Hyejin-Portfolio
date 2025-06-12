// header 스크롤 애니메이션
$(window).on("scroll", function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop >= 80) {
    $("header").addClass("active");
  } else if (scrollTop < 80) {
    $("header").removeClass("active");
  }
});

// intro text-wrap 애니메이션
$(window).on("load", function () {
  $(".intro-text-wrap").addClass("load");
});
