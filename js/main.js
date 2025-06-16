// header 스크롤 애니메이션
function scrollHeader() {
  if (window.matchMedia("screen and (min-width: 1024px)").matches) {
    let scrollTop = $(this).scrollTop();

    if (scrollTop >= 80) {
      $(".header").addClass("active");
    } else if (scrollTop < 80) {
      $(".header").removeClass("active");
    }
  }
}

$(window).on("scroll", function () {
  scrollHeader();
});

$(window).on("resize", function () {
  if (window.matchMedia("screen and (max-width: 1024px)").matches) {
    $(".header").removeClass("active");
  }
});

// nav 열기
$(".open-mobile-nav").on("click", function () {
  $(".header").addClass("mobile-active");
  $(".nav").addClass("active");
});

// nav 닫기
$(".close-mobile-nav").on("click", function () {
  $(".header").removeClass("mobile-active");
  $(".nav").removeClass("active");
});

// nav 외부 클릭시 nav 닫기
$(document).on("click", function (e) {
  if (
    $(".nav").has(e.target).length === 0 &&
    $(e.target).closest(".open-mobile-nav").length === 0
  ) {
    $(".header").removeClass("mobile-active");
    $(".nav").removeClass("active");
  }
});

// intro text-wrap 애니메이션
$(window).on("load", function () {
  $(".intro-text-wrap").addClass("load");
});

$(".header-item a").on("click", function () {
  $(".header").removeClass("mobile-active");
  $(".nav").removeClass("active");
});
