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

  function increaseQty() {
    var qty = document.getElementById("Quantity");
    if (parseInt(qty.value) < 10) {
      qty.value = parseInt(qty.value) + 1;
    }
  }

  function decreaseQty() {
    var qty = document.getElementById("Quantity");
    if (parseInt(qty.value) > 1) {
      qty.value = parseInt(qty.value) - 1;
    }
  }

  function showPincodeInput() {
    document.getElementById("pincode-wrapper").style.display = "flex";
  }

  function checkEDD() {
    var pin = document.getElementById("pincode").value.trim();
    var result = document.getElementById("edd-result");

    if (/^\d{6}$/.test(pin)) {
      result.innerText = "Estimated delivery: 3–5 days";
      result.style.color = "#28a745";
    } else {
      result.innerText = "Please enter a valid 6-digit pincode.";
      result.style.color = "#ff4d4d";
    }
  }

  function toggleShareMenu() {
    var menu = document.getElementById("share-menu");
    menu.style.display = menu.style.display === "none" ? "block" : "none";
  }

  function copyShareLink() {
    var link = "{{ shop.url }}/products/{{ product.handle }}";
    navigator.clipboard.writeText(link).then(function() {
      document.getElementById("copy-status").style.display = "block";
      setTimeout(() => {
        document.getElementById("copy-status").style.display = "none";
      }, 2000);
    });
  }


  (function() {
    const row = document.getElementById('feature-badges');
    if (!row) return;

    const tooltip = document.getElementById('badge-tooltip');
    const content = document.getElementById('badge-tooltip-content');
    const closeBtn = tooltip.querySelector('.tooltip-close');

    function openTooltip(btn) {
      content.textContent = btn.getAttribute('data-content') || '';
      tooltip.setAttribute('aria-hidden', 'false');
      const rect = btn.getBoundingClientRect();
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrollX = window.scrollX || document.documentElement.scrollLeft;
      tooltip.style.top = (rect.bottom + scrollY + 8) + 'px';
      tooltip.style.left = (rect.left + scrollX) + 'px';
      document.addEventListener('click', onDocClick);
      document.addEventListener('keydown', onEsc);
    }

    function closeTooltip() {
      tooltip.setAttribute('aria-hidden', 'true');
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onEsc);
    }

    function onDocClick(e) {
      if (!tooltip.contains(e.target) && !e.target.classList.contains('badge')) {
        closeTooltip();
      }
    }

    function onEsc(e) {
      if (e.key === 'Escape') closeTooltip();
    }

    row.addEventListener('click', function(e) {
      const btn = e.target.closest('.badge');
      if (!btn) return;
      const hidden = tooltip.getAttribute('aria-hidden') !== 'false';
      if (!hidden) {
        closeTooltip();
        setTimeout(() => openTooltip(btn), 0);
      } else {
        openTooltip(btn);
      }
    });

    closeBtn.addEventListener('click', closeTooltip);
  })();



