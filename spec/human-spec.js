import { Human } from '../src/human.js';

describe('Human', function() {
  it('should test whether or not a Human has its properties', function() {
    let testHuman = new Human("Rick Sanchez", ("October 13, 2014"));
    expect(testHuman.name).toEqual("Rick Sanchez");
    expect(testHuman.birthDate).toEqual("October 13, 2014");
  });
});

describe('ageCalculator', function() {
  it('should test if the users exact age is returned', function() {
    let testHuman = new Human("Rick Sanchez", ("August 31, 1991"));
    let newAge = testHuman.ageCalculator();
    expect(newAge).toEqual(26);
  });
});
