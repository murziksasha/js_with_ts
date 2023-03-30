export function loggerMe() {
<<<<<<< HEAD
=======
    function secondTask() {
        const lines = 5;
        let result = '';
        for (let i = 1; i <= lines; i++) {
            for (let j = 1; j <= lines - i; j++) {
                result += " ";
            }
            for (let k = 1; k <= i * 2 - 1; k++) {
                result += "*";
            }
            // console.log(result);
            result += '\n';
        }
        return result;
    }
    console.log(secondTask());
>>>>>>> acbebbe5917f5ec68b0573c40eb7f65a559f75a6
}
