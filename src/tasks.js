export function tasks() {
    const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Wigvig'];
    function sortStudentsByGroups(arr) {
        const sortArr = arr.sort();
        const team1 = [];
        const team2 = [];
        const team3 = [];
        let restStudent = 'Оставшиеся студенты: ';
        const resultArr = [];
        sortArr.forEach((item, i) => {
            if (i < 3) {
                team1.push(item);
            }
            else if (i < 6) {
                team2.push(item);
            }
            else if (i < 9) {
                team3.push(item);
            }
            else {
                restStudent += `${item}, `;
            }
        });
        resultArr[0] = team1;
        resultArr[1] = team2;
        resultArr[2] = team2;
        resultArr[3] = restStudent.trim().slice(0, -1);
        return resultArr;
    }
    console.log(sortStudentsByGroups(students));
}
