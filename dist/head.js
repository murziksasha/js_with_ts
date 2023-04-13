export function loggerMe() {
    const btns = document.querySelectorAll('button');
    // console.log(btns[0].classList.item(0));
    btns[0].addEventListener('click', () => {
        if (btns[3].classList.contains('red')) {
            btns[3].classList.remove('red');
        }
        else {
            btns[3].classList.add('red');
        }
    });
}
