const buttonOpen = document.querySelector('.tech-services-expand__btn-open');
const buttonClose = document.querySelector('.tech-services-expand__btn-close');
const mainOpen = document.querySelector('.tech-services-main__open');

buttonOpen.classList.remove('open');


buttonOpen.addEventListener('click', function() {
  buttonOpen.classList.remove('open');
  if (document.querySelector('.tech-services-main__open')) {
    mainOpen.classList.remove('tech-services-main__open');
    buttonOpen.classList.add('open');
    buttonClose.classList.remove('close');
  }
});

buttonClose.addEventListener('click', function() {
  buttonClose.classList.remove('close');
  if (!document.querySelector('.tech-services-main__open')) {
    mainOpen.classList.add('tech-services-main__open');
    buttonClose.classList.add('close');
    buttonOpen.classList.remove('open');
  }
});
