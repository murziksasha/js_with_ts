export function loggerMe() {
    let intervalMy, count = 0;
    document.querySelector('#btn1')?.addEventListener('click', () => {
        intervalMy = setInterval(logger, 2000);
    });
    function logger() {
        console.log('text');
        count++;
        if (count === 5) {
            clearInterval(intervalMy);
            console.log(`clear interval because count = ${count}`);
        }
    }
}
