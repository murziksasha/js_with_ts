export function loggerMe(): void {
  interface MyColors {
    border: string;
    bg: string;
  }

  interface MyOptions {
    name: string;
    width: number;
    heigh?: number;
    colors: MyColors;
  }

  const options: MyOptions = {
    name: 'test',
    width: 1024,
    heigh: 1024,
    colors: {
      border: 'black',
      bg: 'red',
    },
  };

  for (let key in options) {
    if (typeof options[key] === "object" && options[key] !== null) {
      for (const nestedKey in options[key]) {
        console.log(`${key}.${nestedKey}: ${options[key][nestedKey]}`);
      } 
    } else {
      console.log(key)
    }
  }



}
