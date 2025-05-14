import './index.scss';
import Swiper from 'swiper';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.image-slider', {
    modules: [EffectFade, Navigation, Pagination],
    effect: 'fade',
    loop: true,
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
  console.log(swiper);
});
