import './index.scss';
import Swiper from 'swiper';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.standart-slider', {
    modules: [EffectFade, Navigation],
    // effect: 'fade',
    slidesPerView: 1.5,

    centeredSlides: true,
    // loop: true,
    spaceBetween: 8,
    // init: true,
    autoHeight: false,

    // fadeEffect: {
    //   crossFade: true,
    // },
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });
  console.log(swiper);
});
