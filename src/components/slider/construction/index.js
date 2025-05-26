import './index.scss';
import Swiper from 'swiper';
import {
  EffectFade,
  Navigation,
  Pagination,
  HashNavigation,
} from 'swiper/modules';
const construction = new Swiper('.construction-slider', {
  modules: [Navigation, HashNavigation],
  hashNavigation: true,
  slidesPerView: 1,
  allowTouchMove: false,

  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
});

new Swiper('.swiper-carousel', {
  modules: [Navigation, EffectFade, Pagination],
  // effect: 'fade',
  slideClass: 'swiper-carousel__slide',
  slidesPerView: 1,

  spaceBetween: 20,
  pagination: {
    el: '.swiper-carousel__pagination',
    type: 'bullets',
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.sm-btn-next',
    prevEl: '.sm-btn-prev',
  },
  // autoplay: {
  //   delay: 1500,
  // },
});

// construction.slides.forEach(function (slide) {
//   const carousel = slide.querySelector('.swiper-carousel');
//   if (carousel) {
//     slide.addEventListener('mouseenter', function () {
//       carousel.swiper.autoplay.start();
//     });

//     slide.addEventListener('mouseleave', function () {
//       carousel.swiper.autoplay.stop();
//     });
//   }
// });
