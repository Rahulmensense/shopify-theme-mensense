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
    arrows: false, // ✅ Arrows enabled
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
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">←</button>',
    nextArrow: '<button type="button" class="slick-next">→</button>',
    dots: false,
    infinite: false
  });
});

function showMoreReviews() {
    document.querySelectorAll('#review-list .review-item[style*="display:none"]').forEach(function(el){
      el.style.display = 'block';
    });
    var btn = document.querySelector('.show-more-reviews');
    if (btn) btn.style.display = 'none';
  }

  function filterReviews(value) {
    console.log('Filter selected:', value);
  }

  function filterReviews(value) {
    const reviews = Array.from(document.querySelectorAll('#review-list .review-item'));
    const container = document.getElementById('review-list');

    // Reset all reviews
    reviews.forEach(r => r.style.display = 'block');

    if (value === 'rating') {
      reviews.sort((a, b) => {
        const ratingA = parseInt(a.dataset.rating || 0);
        const ratingB = parseInt(b.dataset.rating || 0);
        return ratingB - ratingA;
      });
    } else if (value === 'media') {
      reviews.forEach(r => {
        if (!r.querySelector('.review-media')) {
          r.style.display = 'none';
        }
      });
      return;
    }

    // Reorder DOM
    reviews.forEach(r => container.appendChild(r));
  }



var $jq = jQuery.noConflict();
$jq(document).ready(function(){
  $jq('.slick-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true
  });
});
  




