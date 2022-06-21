const buttonOpen = document.querySelector('.expand__btn-open');
const buttonClose = document.querySelector('.expand__btn-close');
const mainOpen = document.querySelector('.body__content--open');

buttonOpen.classList.remove('expand-open');


buttonOpen.addEventListener('click', function() {
  buttonOpen.classList.remove('expand-open');
  if (document.querySelector('.body__content--open')) {
    mainOpen.classList.remove('body__content--open');
    buttonOpen.classList.add('expand-open');
    buttonClose.classList.remove('expand-close');
  }
});

buttonClose.addEventListener('click', function() {
  buttonClose.classList.remove('expand-close');
  if (!document.querySelector('.body__content--open')) {
    mainOpen.classList.add('body__content--open');
    buttonClose.classList.add('expand-close');
    buttonOpen.classList.remove('expand-open');
  }
});
