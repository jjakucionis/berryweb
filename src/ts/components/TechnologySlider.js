import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

export default {
  init() {
    const screens = document.querySelectorAll('[data-screen]');
    let techswiper = new Swiper('#technology-slider', {
      observer: true,
      observeParents: true,
      direction: 'horizontal',
      slidesPerView: 1,
      pagination: {
        el: '#technology-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '#tech-next',
        prevEl: '#tech-prev',
      },
    });

    techswiper.on('slideChange', () => {
      const active = techswiper.activeIndex;
      const target = document.querySelector(`[data-screen="${active}"]`);
      console.log(active);
      screens.forEach((screen) => {
        screen.classList.remove('is-visible');
      });
      target.classList.add('is-visible');
    });
  },
};
