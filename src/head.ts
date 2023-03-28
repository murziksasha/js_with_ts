

export function loggerMe(): void {



  const confirmMe: string | null = prompt('do you want me?', '');

  confirmMe !== null  ? console.log(confirmMe) : console.log(`it's empty answer. It's very unpleasant`);

  console.log(confirmMe + "10");







}