import './index.scss';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.advantages-slider', {
    modules: [Navigation],
    slidesPerView: 1,
    breakpoints: {
      '@0.00': {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      '@1.50': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },

    loop: true,
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });
});
