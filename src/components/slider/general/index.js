import './index.scss';
import Swiper from 'swiper';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.general-slider', {
    modules: [EffectFade, Navigation],
    effect: 'fade',
    loop: true,
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });
  console.log(swiper);
});
