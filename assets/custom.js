window.addEventListener("load", function () {
  var $slider = jQuery('.feedback-slider');
  if ($slider.length && !$slider.hasClass('slick-initialized')) {
    $slider.slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: true,
      slidesToShow: 1
    });
  }
});
