const burger = document.querySelector('.menu__btn');
const menuCont = document.querySelector('.menu-container');
const menuContBtnClose = document.querySelector('.menu-container__close');
const container = document.querySelector('.container');

burger.addEventListener('click', ()=> {
  menuCont.classList.toggle('menu-container--hide');
  container.classList.add('transpsransy');
});

menuContBtnClose.addEventListener('click', ()=> {
  menuCont.classList.toggle('menu-container--hide');
  container.classList.remove('transpsransy');
});
