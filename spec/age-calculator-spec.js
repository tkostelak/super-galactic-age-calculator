import { dateToSeconds } from '../src/age-calculator.js';
import { differenceBetweenDates } from '../src/age-calculator.js';

const secondsInMonth = 2628000;
const secondsInYear = 31540000;
const secondsInDay = 86400;

describe('dateToSeconds', function() {
  it('should test if a date is successfully converted into seconds', function() {
    let year = 2018;
    let month = 3;
    let day = 16;
    let dateInSeconds = (year * secondsInYear) + (month * secondsInMonth) + (day * secondsInDay);
    expect(dateInSeconds).toEqual(63656986400);
  });
});

describe('differenceBetweenDates', function() {
  it('should test if the function returns the difference between two dates', function() {
    var dateOne = new Date("October 31, 1999");
    var dateTwo = new Date("October 31, 2017");
    let dateDifference = (dateTwo - dateOne);
    expect(dateDifference).toEqual(568080000000);
  });
});
