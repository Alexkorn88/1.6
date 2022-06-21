const chat = document.querySelector('.chat__btn');
const menuChat = document.querySelector('.menu-btn-chat');
const modalCont = document.querySelector('.feedback');
const menuContBtnClose = document.querySelector('.modal__close');
const container = document.querySelector('.container');
const menu = document.querySelector('.menu-container');

chat.addEventListener('click', ()=> {
  modalCont.classList.toggle('modal--hide');
  container.classList.add('transpsransyMax');
  menu.classList.add('transpsransyMax');
});

menuChat.addEventListener('click', ()=> {
  modalCont.classList.toggle('modal--hide');
  container.classList.add('transpsransyMax');
  menu.classList.add('transpsransyMax');
  menu.classList.remove('menu-container--hide');
});

menuContBtnClose.addEventListener('click', ()=> {
  modalCont.classList.toggle('modal--hide');
  container.classList.remove('transpsransyMax');
  menu.classList.remove('transpsransyMax');
  container.classList.remove('transpsransy');
});
