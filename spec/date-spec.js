import { Date } from '../src/date.js';

describe('Date', function() {
  it('should test whether or not a date has its properties', function() {
    let testDate = new Date(2018, 3, 16);
    expect(testDate.year).toEqual(2018);
    expect(testDate.month).toEqual(3);
    expect(testDate.day).toEqual(16);
  });
});
