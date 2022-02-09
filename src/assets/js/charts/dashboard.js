(function () {
  "use strict";
  if (jQuery('.d-slider2').length > 0) {
    const options = {
        centeredSlides: false,
        loop: false,
        slidesPerView: 4,
        autoplay:false,
        spaceBetween: 32,
        breakpoints: {
            320: { slidesPerView: 1 },
            550: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
            1400: { slidesPerView: 3 },
            1500: { slidesPerView: 3 },
            1920: { slidesPerView: 3 },
            2040: { slidesPerView: 4 },
            2440: { slidesPerView: 4 }
        },
        pagination: {
            el: '.swiper-pagination'
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar'  
        }
    } 
    new Swiper('.d-slider2',options);
  }

})()
