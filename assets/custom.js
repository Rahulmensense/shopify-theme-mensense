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