import './index.scss';
import Swiper from 'swiper';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.offer-slider', {
    modules: [EffectFade, Navigation, Pagination, Autoplay],
    effect: 'fade',
    autoplay: {
      delay: 4000,
    },
    loop: true,
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
});
