window.addEventListener("load", function () {
  if (typeof jQuery !== "undefined" && jQuery('.feedback-slider').length) {
    jQuery('.feedback-slider').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: false,
      slidesToShow: 1
    });
  }
});

