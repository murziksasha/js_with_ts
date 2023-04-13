export function loggerMe(): void {

const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.item(0));

btns[0].addEventListener('click', ()=>{

  btns[1].classList.toggle('red');
  console.log(btns[1].classList.contains('red'))
})


console.log(btns[0].classList)



















}
