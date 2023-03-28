export function loggerMe() {
    const confirmMe = prompt('do you want me?', '');
    confirmMe !== null ? console.log(confirmMe) : console.log(`it's empty answer. It's very unpleasant`);
    console.log(confirmMe + "10");
}
