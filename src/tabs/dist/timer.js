export function timer() {
    const deadline = '20-05-2023';
    function getTimeRemaining(endtime) {
        const [day, month, year] = endtime.split('-');
        const dateString = `${year}-${month}-${day}`;
        const currentDate = new Date();
        const currentTimestamp = currentDate.getTime();
        const t = Date.parse(dateString) - currentTimestamp;
    }
    getTimeRemaining(deadline);
}
