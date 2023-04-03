export function loggerMe() {
    function getTimeFromMinutes(num) {
        let resultHours = Math.floor(num / 60);
        let resultMinutes = num % 60;
        const result = `Это ${resultHours} часов и ${resultMinutes} минут`;
        if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) {
            return "Ошибка, проверьте данные";
        }
        else if (resultHours === 0) {
            return `Это ${resultHours} часов и ${resultMinutes} минут`;
        }
        else if (resultHours === 1) {
            return `Это ${resultHours} час и ${resultMinutes} минут`;
        }
        else if (resultHours > 1 && resultHours <= 4) {
            return `Это ${resultHours} часа и ${resultMinutes} минут`;
        }
        else if (resultHours >= 5 && resultHours <= 10) {
            return `Это ${resultHours} часов и ${resultMinutes} минут`;
        }
        return result;
    }
    console.log(getTimeFromMinutes(50));
}
