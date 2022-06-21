
import Swiper, {Navigation, Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
Swiper.use([Navigation, Pagination]);
const breakPoint = window.matchMedia('(min-width: 768px)');
let mySwiper3;

const breakpointChecker = function() {
  // if larger viewport and multi-row layout needed
  if (breakPoint.matches === true) {
    // clean up old instances and inline styles when available
    console.log(mySwiper3);
    // mySwiper.forEach((swiper) => {
    //   if (swiper !== undefined) {
    //     swiper.destroy(true, true);
    //   }
    // });
    if (mySwiper3 !== undefined) {
      mySwiper3.map((swiper) => {
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
  mySwiper3 = new Swiper('.swiper3', {
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
