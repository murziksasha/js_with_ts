export function modal() {
  const modal = document.querySelector('.modal') as HTMLDivElement;
  const modalOpen = document.querySelectorAll('[data-modal]');
  const modalClose = document.querySelector('[data-close]');

  modalOpen.forEach((item) => {
    item.addEventListener('click', (e) => {
      modalOn();
    });
  });

  function modalOn() {
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    // clearTimeout(modalTimerId);
  }

  function modalOff() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
  }

  modal.addEventListener('click', (e) => {
    const target = e.target as HTMLDivElement;
    if (target === modal) {
      modalOff();
    }
  });

  document.addEventListener('keydown', e => {
    const target = e.code;
    if(target === 'Escape' && !modal.classList.contains('hide')){
      modalOff();
    }
  });

  modalClose?.addEventListener('click', (e) => {
    modalOff();
  });


  // const modalTimerId = setTimeout(modalOn, 50000);

  window.addEventListener('scroll', showModalByScroll);

  function showModalByScroll() {
      if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
        modalOn();
        window.removeEventListener('scroll', showModalByScroll);
      }
  }

  showModalByScroll();

}
