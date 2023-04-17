

export function timer() {

  const deadline: string = '20-05-2023';

  function getTimeRemaining(endtime: string) {
    const [day, month, year] = endtime.split('-');
    const dateString: string = `${year}-${month}-${day}`;
    const currentDate = new Date();
    const currentTimestamp = currentDate.getTime();
    const t = Date.parse(dateString) - currentTimestamp;


    
  }

  getTimeRemaining(deadline);


}