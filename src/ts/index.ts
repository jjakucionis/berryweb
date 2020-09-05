import '../scss/main.scss';
import TechnologySliderJs from './components/TechnologySlider.js';
import HeroSliderJs from './components/HeroSlider.js';
import MenuJs from './components/Menu.js';

(function () {
  if (typeof (NodeList as any).prototype.forEach !== 'function') {
    (NodeList as any).prototype.forEach = Array.prototype.forEach;
  }
  return false;
})();

const onLoad = (e: Event) => {
  inits();
  onResize(e);
};

const onResize = (e: Event) => {
  onScroll(e);
};

const onScroll = (e: Event) => {};

const inits = () => {
  TechnologySliderJs.init();
  HeroSliderJs.init();
  MenuJs.init();
};

window.addEventListener('load', onLoad);
window.addEventListener('resize', onResize);
window.addEventListener('scroll', onScroll);
