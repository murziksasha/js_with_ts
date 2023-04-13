export function loggerMe(): void {



<<<<<<< HEAD
  function getMathResult(base: number, countWay: number | string): string | number {
    if(typeof countWay !== 'number' || countWay < 0){
      return base;
    }
    let result: string =`${base}` ;
    let incr:  number = 0;
    if(countWay > 0){
      for(let i=1; i < countWay; i ++){
        incr = base + (base * i);
        result += `---${incr}`;
      }
    }
    return result;
  }

  console.log(getMathResult(10, 5))




  
=======
  const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50},
  ]

  const budget = [5000, 15000, 25000];

  const map = new Map();

  shops.forEach((item: any, i) => {
    map.set(item, budget[i])
  })
>>>>>>> 9e9411ab9bc41ba5739d71c48ceb5054fb95a022


map.forEach((value, key, map) => {
  console.log(value, key)
})


}
