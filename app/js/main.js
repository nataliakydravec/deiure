$(document).ready(function () {

  $('.slider__inner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });


  $('.reviews__wrapper').slick({
    // autoplay: true,
    // autoplaySpeed: 4000,
    infinite: false,
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
  });

  $('.form__map-btn').click(function () {
    $('.form__map-box').slideToggle(1500)
  });

  $('.header__btn-menu').on('click', function() {
    $('.menu__list').slideToggle();
});
});