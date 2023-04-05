export function tasks() {

  type ArrStr = string[];
  type ResultArr = any;

  const students: ArrStr = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Wigvig'];

  function sortStudentsByGroups(arr: string[]): ResultArr {
    const sortArr: ArrStr = arr.sort();
    const team1: ArrStr = [];
    const team2: ArrStr = [];
    const team3: ArrStr= [];
    let restStudent = 'Оставшиеся студенты: ';
    const resultArr: ResultArr = [];

    sortArr.forEach((item, i) => {
      if(i < 3){
        team1.push(item);
      } else if ( i < 6){
        team2.push(item);
      } else if (i < 9) {
        team3.push(item);
      } else {
        restStudent += `${item}, `;
      }
    })

    resultArr[0] = team1;
    resultArr[1] = team2;
    resultArr[2] = team2;
    resultArr[3] = restStudent.trim().slice(0, -1);

    return resultArr;
  }
  
  console.log(sortStudentsByGroups(students));

}