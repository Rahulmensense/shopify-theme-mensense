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

    function initSlickSlider(scope) {
      const sliders = (scope || document).querySelectorAll('.product-image-slider');
      sliders.forEach(function(slider) {
        if (!slider.classList.contains('slick-initialized')) {
          $(slider).slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
          });
        }
      });
    }

    document.addEventListener("DOMContentLoaded", function() {
      initSlickSlider();
    });

    document.addEventListener("shopify:section:load", function(e) {
      initSlickSlider(e.target);
    });



