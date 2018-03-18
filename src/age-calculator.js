const secondsInMonth = 2628000;
const secondsInYear = 31540000;
const secondsInDay = 86400;

export function dateToSeconds(year, month, day) {

  let dateInSeconds = (year*secondsInYear) + (month*secondsInMonth) + (day*secondsInDay);
  return dateInSeconds;
}

export function differenceBetweenDates (dateOne, dateTwo) {
  let firstDate = new Date(dateOne);
  let secondDate = new Date(dateTwo);

  let dateDifference = (secondDate - firstDate);

  return dateDifference;
}
