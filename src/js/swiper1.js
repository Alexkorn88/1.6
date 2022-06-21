/* eslint-disable require-jsdoc */

import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
Swiper.use([Navigation, Pagination]);
const breakPoint = window.matchMedia('(min-width: 768px)');
let mySwiper;

const breakpointChecker = function() {
  // if larger viewport and multi-row layout needed
  if (breakPoint.matches === true) {
    // clean up old instances and inline styles when available
    console.log(mySwiper);
    // mySwiper.forEach((swiper) => {
    //   if (swiper !== undefined) {
    //     swiper.destroy(true, true);
    //   }
    // });
    if (mySwiper !== undefined) {
      mySwiper.map((swiper) => {
        swiper.destroy(true, true);
      });
    } // mySwiper[0].destroy(true, true);

    // or/and do nothing
    return;

    // else if a small viewport and single column layout needed
  } else if (breakPoint.matches === false) {
    // fire small viewport version of swiper
    return enableSwiper();
  }
};

const enableSwiper = () => {
  mySwiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};

breakPoint.addListener(breakpointChecker);

// kickstart
breakpointChecker();

