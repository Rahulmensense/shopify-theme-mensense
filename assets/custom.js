window.addEventListener("load", function () {
  if ($('.feedback-slider').length > 0 && !$('.feedback-slider').hasClass('slick-initialized')) {
    $('.feedback-slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
});

$('.product-image-slider').slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});





