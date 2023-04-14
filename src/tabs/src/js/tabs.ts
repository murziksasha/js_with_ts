

export function tabs() {

const tabHeaderItems = document.querySelector('.tabheader__items');
const tabsItem = document.querySelectorAll('.tabheader__item');
const tabContents = document.querySelectorAll('.tabcontent');

tabHeaderItems?.addEventListener('click', e => {
  const target = e.target as HTMLDivElement;
  if(target && target.matches('div.tabheader__item')){
    tabsItem.forEach((item, i) => {
      item.classList.remove('tabheader__item_active');
      console.log(target.dataset.current)
      if(target.dataset.current == String(i)){
        item.classList.add('tabheader__item_active');
        tabBodyShow(i);
      }
    })
  }
})

function tabBodyShow(tabNum = 0){
  tabContents.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('fade');
  })
  tabContents[tabNum].classList.toggle('hide');
  tabContents[tabNum].classList.add('fade');
}



} 