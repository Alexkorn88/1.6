
const buttonOpen = document.querySelector('.services-expand__btn-open');
const buttonClose = document.querySelector('.services-expand__btn-close');
const mainOpen = document.querySelector('.services-main__open');

buttonOpen.classList.remove('open');


buttonOpen.addEventListener('click', function() {
  buttonOpen.classList.remove('open');
  if (document.querySelector('.services-main__open')) {
    mainOpen.classList.remove('services-main__open');
    buttonOpen.classList.add('open');
    buttonClose.classList.remove('close');
  }
});

buttonClose.addEventListener('click', function() {
  buttonClose.classList.remove('close');
  if (!document.querySelector('.services-main__open')) {
    mainOpen.classList.add('services-main__open');
    buttonClose.classList.add('close');
    buttonOpen.classList.remove('open');
  }
});
