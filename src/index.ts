

import { loggerMe } from './head.js';
import { movie } from './movie.js';

window.addEventListener('DOMContentLoaded', () => {
  loggerMe();
  // movie();



  const someObj = {
    num: 13,
    str: 'hello',
    bool: false
  }
  

  let valueResult = Object.values(someObj)

  console.log(valueResult)

});
