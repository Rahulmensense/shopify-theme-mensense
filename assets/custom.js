window.addEventListener("load", function () {
  if ($('.slider').length > 0 && !$('.slider').hasClass('slick-initialized')) {
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
});

