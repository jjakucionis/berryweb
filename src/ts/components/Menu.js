export default {
  init() {
    const burger = document.getElementById('burger');
    const header = document.getElementById('header');
    const menuItems = document.querySelectorAll('.menu__list-item a');

    burger.addEventListener('click', () => {
      burger.classList.toggle('is-open');
      header.classList.toggle('is-open');
    });

    menuItems.forEach((element) => {
      element.addEventListener('click', () => {
        if (burger.classList.contains('is-open')) {
          burger.classList.remove('is-open');
        }
        if (header.classList.contains('is-open')) {
          header.classList.remove('is-open');
        }
      });
    });

    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        if (burger.classList.contains('is-open')) {
          burger.classList.remove('is-open');
        }
        if (header.classList.contains('is-open')) {
          header.classList.remove('is-open');
        }
      } else {
      }
    }
  },
};
