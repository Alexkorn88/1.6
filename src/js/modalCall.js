const call = document.querySelector('.call__btn');
const menuCall = document.querySelector('.menu-btn-call');
const modalCont = document.querySelector('.feedback-call');
const menuContBtnClose = document.querySelector('.call-modal__close');
const container = document.querySelector('.container');
const menu = document.querySelector('.menu-container');

call.addEventListener('click', ()=> {
  modalCont.classList.toggle('call-modal--hide');
  container.classList.add('transpsransyMax');
  menu.classList.add('transpsransyMax');
});

menuCall.addEventListener('click', ()=> {
  modalCont.classList.toggle('call-modal--hide');
  container.classList.add('transpsransyMax');
  menu.classList.add('transpsransyMax');
  menu.classList.remove('menu-container--hide');
  menu.classList.toggle('menu-container--hiden');
});

menuContBtnClose.addEventListener('click', ()=> {
  modalCont.classList.toggle('call-modal--hide');
  container.classList.remove('transpsransyMax');
  menu.classList.remove('transpsransyMax');
  container.classList.remove('transpsransy');
  menu.classList.toggle('menu-container--hiden');
});
