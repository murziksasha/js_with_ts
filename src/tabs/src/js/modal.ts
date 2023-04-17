
export function modal(){

const modal = document.querySelector('.modal') as HTMLDivElement;
const modalOpen = document.querySelectorAll('[data-modal]');
const modalClose = document.querySelector('[data-close]');


modalOpen.forEach(item => {
  item.addEventListener('click', e => {
    modal.style.display = 'block';
    document.body.style.overflow = "hidden";
  })
});

modal.addEventListener('click', e => {
  const target = e.target as HTMLDivElement;
  if(target === modal){
    modal.style.display = 'none';
    document.body.style.overflow = "";
  }
})

modalClose?.addEventListener('click', e => {
  modal.style.display = 'none';
  document.body.style.overflow = "";
})





}