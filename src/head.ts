export function loggerMe(): void {

const btns = document.querySelectorAll('button');
const parent = document.querySelector('#first') as HTMLDivElement;

// console.log(btns[0].classList.item(0));

parent.addEventListener('click', (e)=>{

  const target = e.target as HTMLButtonElement;

  if(target && target.matches('[data-current = "1"]')){    
    if(btns[3].classList.contains('red')){
      btns[3].classList.remove('red');
    } else {
      btns[3].classList.add('red');
    }
  }

})





















}
