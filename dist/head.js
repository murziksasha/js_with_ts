export function loggerMe() {
    const btns = document.querySelectorAll('button');
    const parent = document.querySelector('#first');
    // console.log(btns[0].classList.item(0));
    parent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.tagName === 'BUTTON') {
            if (btns[3].classList.contains('red')) {
                btns[3].classList.remove('red');
            }
            else {
                btns[3].classList.add('red');
            }
        }
    });
    const btn = document.createElement('button');
    btn.classList.add('blue');
    parent.insertAdjacentElement('beforeend', btn);
}
