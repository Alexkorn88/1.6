/* eslint-disable camelcase */
// const burger = document.querySelector('.menu__btn');
// const menuCont = document.querySelector('.menu-container');
// const menuContBtnClose = document.querySelector('.menu-container__close');
// const container = document.querySelector('.container');

// burger.addEventListener('click', ()=> {
//   menuCont.classList.toggle('menu-container--hide');
//   container.classList.add('transpsransy');
// });


// menuContBtnClose.addEventListener('click', ()=> {
//   menuCont.classList.toggle('menu-container--hide');
//   container.classList.remove('transpsransy');
// });

// menuCont.addEventListener('click', (e)=> {
//   const menClick = e.composedPath().includes(menuCont);
//   if (menClick) {
//     console.log('hi');
//     menuCont.classList.toggle('menu-container--hide');
//   }
// });

const burger = document.querySelector('.menu__btn');
const menuCont = document.querySelector('.menu-container');
const menuContBtnClose = document.querySelector('.menu-container__close');
const container = document.querySelector('.container');

// const breakPoint = window.matchMedia('(min-width: 1430px)');
// if (window.matchMedia('(min-width: 1430px)').matches) {
//   menuCont.classList.add('menu-container--hide');
//   console.log('hi');
// } else {
const toggleMenu = () => {
  menuCont.classList.toggle('menu-container--hide');
  container.classList.toggle('transpsransy');
};

burger.addEventListener('click', (e) => {
  e.stopPropagation();

  toggleMenu();
});

menuContBtnClose.addEventListener('click', (e) => {
  e.stopPropagation();

  toggleMenu();
});


document.addEventListener('click', (e) => {
  const target = e.target;
  const its_menu = target == menuCont || menuCont.contains(target);
  const its_burger = target == burger;
  const menu_is_active = menuCont.classList.contains('menu-container--hide');

  if (!its_menu && !its_burger && menu_is_active) {
    toggleMenu();
  }
});
// }

