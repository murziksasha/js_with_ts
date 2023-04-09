export function tasks() {

function factorial(n) {
    if(typeof n !== 'number' || (n % 1 != 0) ){
        return `${n} not match for condition, attention!`
    } else if (n === 0 || n < 0 ){
        return 1;
    } else  {
        return n * factorial(n - 1 );
    }
}

console.log(factorial(4));

}
