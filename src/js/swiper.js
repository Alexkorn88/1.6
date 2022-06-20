// /* eslint-disable require-jsdoc */

// import Swiper, {Navigation, Pagination} from 'swiper';
// import 'swiper/swiper.scss';
// import 'swiper/modules/pagination/pagination.scss';
// Swiper.use([Navigation, Pagination]);


// const sliders = document.querySelectorAll('.swiper');
// sliders.forEach((el) => {
//   let mobSwiper;


//   function mobileSlider() {
//     if (window.innerWidth <= 760) {
//       // console.log('Swiper');
//       mobSwiper = new Swiper(el, {

//         slidesPerView: 'auto',
//         pagination: {
//           el: el.querySelector('.swiper-pagination'),
//           type: 'bullets',
//           clickable: true,
//         },

//         spaceBetween: 16,
//       });

//       // sliders.dataset.mobile = 'true';
//     }

//     if (window.innerWidth > 760) {
//       // console.log('Big');
//       const newLocal = 'swiper-initialized';
//       // sliders.dataset.mobile = 'false';

//       if (sliders.classList.contains(newLocal)) {
//         mobSwiper.destroy();
//       }
//     }
//   }

//   mobileSlider();

//   window.addEventListener('resize', () => {
//     mobileSlider();
//   });
// });

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
