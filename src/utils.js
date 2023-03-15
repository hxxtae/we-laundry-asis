import { tns } from "../node_modules/tiny-slider/src/tiny-slider.js";

const commonOptions = {
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
};

const slider = tns({
  ...commonOptions,
  navAsThumbnails: true,
  controls: false,
  container: '.sllder-carousels .slider-list',
  navContainer: '.sllder-carousels .thumbnail-list',
  controlsPosition: 'bottom',
  center: true,
  loop: false,
  swipeAngle: false,
  speed: 400
});
  