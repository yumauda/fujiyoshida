"use strict";

const slider2 = new Swiper(".slider2", {
  slidesPerView: 1.6,
  centeredSlides: true,
  loop: true,
  spaceBetween: 52,
  initialSlide: 0,
  breakpoints: {
    768: {
      effect: "slide",
      loop: true,
      slidesPerView: 3.3,
      spaceBetween: 35,
      centeredSlides: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const slider3 = new Swiper(".slider-banners", {
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
  initialSlide: 0,
  spaceBetween: 20,
  breakpoints: {
    768: {
      effect: "slide",
      spaceBetween: 36,
      slidesPerView: 5,
      centeredSlides: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// ピックアップタブスライダー
const sliderPickup = new Swiper(".slider-mv", {
  slidesPerView: 1,
  centeredSlides: true,
  effect: "fade",
  loop: true,
  initialSlide: 0,
  speed: 2000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      effect: "fade",
      slidesPerView: 1,
      centeredSlides: false,
    },
  },
  
});

const sliderStay = new Swiper(".slider-stay", {
  slidesPerView: 1.1,
  centeredSlides: true,
  loop: true,
  initialSlide: 0,
  breakpoints: {
    768: {
      effect: "slide",
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
  navigation: {
    nextEl: '[data-content="stay"] .swiper-button-next',
    prevEl: '[data-content="stay"] .swiper-button-prev',
  },
});

const sliderFood = new Swiper(".slider-food", {
  slidesPerView: 1.1,
  centeredSlides: true,
  loop: true,
  initialSlide: 0,
  breakpoints: {
    768: {
      effect: "slide",
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
  navigation: {
    nextEl: '[data-content="food"] .swiper-button-next',
    prevEl: '[data-content="food"] .swiper-button-prev',
  },
});

const sliderRestaurant = new Swiper(".slider-restaurant", {
  slidesPerView: 1.1,
  centeredSlides: true,
  loop: true,
  initialSlide: 0,
  breakpoints: {
    768: {
      effect: "slide",
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
  navigation: {
    nextEl: '[data-content="restaurant"] .swiper-button-next',
    prevEl: '[data-content="restaurant"] .swiper-button-prev',
  },
});

const sliderNews = new Swiper(".slider-news", {
  slidesPerView: 1.1,
  centeredSlides: true,
  loop: true,
  initialSlide: 0,
  breakpoints: {
    768: {
      effect: "slide",
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
  navigation: {
    nextEl: '[data-content="news"] .swiper-button-next',
    prevEl: '[data-content="news"] .swiper-button-prev',
  },
});

const slider4 = new Swiper(".slider4", {
  slidesPerView: 1.1,
  centeredSlides: true,
  loop: true,
  initialSlide: 0,
  spaceBetween: 10,
  breakpoints: {
    768: {
      effect: "slide",
      slidesPerView: 2.2,
      spaceBetween: 10,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const slider5 = new Swiper(".slider5", {
  slidesPerView: 1.1,
  centeredSlides: true,
  loop: true,
  initialSlide: 0,
  breakpoints: {
    768: {
      effect: "slide",
      slidesPerView: 1.8,
      spaceBetween: 10,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    },
  },
  navigation: {
    nextEl: ".slider5 .swiper-button-next",
    prevEl: ".slider5 .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
