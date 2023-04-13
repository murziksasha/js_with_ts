export function domWork() {
  const div = document.querySelector('#box') as HTMLDivElement;
  const btns = document.getElementsByTagName('button');
  const circles = document.getElementsByClassName('circle');
  const hearts = document.querySelectorAll('.heart');
  const oneHeart = document.querySelector('.heart') as HTMLDivElement;

  div.style.backgroundColor = 'blue';
  div.style.width = '500px';

  const num = 300;

  oneHeart.style.cssText = `background-color: purple; width: ${num}px; text-align: center;`;

  hearts.forEach((item) => {
    let heart = item as HTMLDivElement;
    heart.style.backgroundColor = 'pink';
  });


const divMy = document.createElement('div') as HTMLDivElement;
const myText = document.createTextNode('hello from TS with JS');

divMy.classList.add('black');

try {
  hearts[1].replaceWith(divMy);
  divMy.append(myText);
} catch(e){}

circles[2].remove();

document.body.insertAdjacentHTML('afterend', '<h1>Hello how are you?</h1>')

}
