import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

export default {
  init() {
    let swiper = new Swiper('#hero-slider', {
      observer: true,
      observeParents: true,
      direction: 'horizontal',
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '#hero-next',
        prevEl: '#hero-prev',
      },
    });
  },
};
