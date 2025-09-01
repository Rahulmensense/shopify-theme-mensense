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
      try {
        $(slider).slick({
          dots: false,
          arrows: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true,
          prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
          nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>'
        });
      } catch (e) {
        console.warn('Slider init failed:', e);
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => initSlickSlider(), 500);
});

document.addEventListener("shopify:section:load", function(e) {
  setTimeout(() => initSlickSlider(e.target), 500);
});



$(document).ready(function(){
  $('.js-main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // ✅ Arrows enabled
    dots: false,
    infinite: true,
    asNavFor: '.js-thumb-slider',
    adaptiveHeight: true
  });

  $('.js-thumb-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.js-main-slider',
    focusOnSelect: true,
    arrows: true, // ✅ Arrows enabled for thumbnails too
    dots: false,
    infinite: false
  });
});



