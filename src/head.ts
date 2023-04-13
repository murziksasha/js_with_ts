

export function loggerMe(): void {



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




  


}