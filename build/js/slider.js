$(document).ready(function () {
  /* SOLUTIONS SLIDER */
  if ($(".solutions__info-slider") != null) {
    $(".solutions__info-slider").slick({
      fade: true,
      arrows: true,
      swipe: false,
      prevArrow: $(".cascade-slider__arrow--left"),
      nextArrow: $(".cascade-slider__arrow--right"),
    });
  }

  /* HOME REVIEWS SLIDER */
  if ($(".reviews__slider") != null) {
    $(".reviews__slider").slick({
      slidesToShow: 1,
      infinite: false,
      arrows: true,
      prevArrow: ".reviews__btn-prev",
      nextArrow: ".reviews__btn-next",
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1.5,
          },
        },
      ],
    });
  }

  /* INSTAGRAM SLIDER */
  if (window.matchMedia("(max-width: 768px)").matches) {
    if ($(".instagram__items") != null) {
      $(".instagram__items").slick({
        infinite: false,
        slidesToShow: 1,
        arrows: false,

        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              prevArrow: ".instagram__btn-prev",
              nextArrow: ".instagram__btn-next",
            },
          },
        ],
      });
    }
  }

  /* HOME HISTORY SLIDER */
  if ($(".history__slider") != null) {
    $(".history__slider").slick({
      slidesToShow: 1,
      infinite: true,
      dots: true,
      appendDots: ".history__slider-pagination",
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
    });
  }
});
