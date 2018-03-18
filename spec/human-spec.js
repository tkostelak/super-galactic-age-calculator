import { Human } from '../src/human.js';

const mercuryYear = 88;
const venusYear = 225;
const marsYear = 687;
const jupiterYear = 4380;

//This test passing confirms that the constructor is returning the values that I am expecting it to.
describe('Human', function() {
  it('should test whether or not a Human has its properties', function() {
    let testHuman = new Human("Rick Sanchez", ("October 13, 2014"));
    expect(testHuman.name).toEqual("Rick Sanchez");
    expect(testHuman.birthDate).toEqual("October 13, 2014");
  });
});

//In order to calculate a users age, first a new human needs to be instantiated. The function is always going to return a year because of the math floor in the function.
describe('ageCalculator', function() {
  it('should test if the users exact age is returned', function() {
    let testHuman = new Human("Rick Sanchez", ("August 31, 1991"));
    let newAge = testHuman.ageCalculator();
    expect(newAge).toEqual(26);
  });
});

//Initially each planetary age was going to be a different SPEC, but it felt overly repetitive and was DRYED to a function that takes planetaryYear as a parameter.
describe('planetAgeCalculator', function() {
  it('should test if the users age is returned in Mercury years', function() {
    let testHuman = new Human("Rick Sanchez", ("August 31, 1991"));
    let newPlanetaryAge = testHuman.planetAgeCalculator(mercuryYear);
    expect(newPlanetaryAge).toEqual(107);
    expect(newPlanetaryAge).not.toEqual(26);
  });
});

//Testing same function planetAgeCalculator but for Venus Years
describe('planetAgeCalculator', function() {
  it('should test if the users age is returned in Venus years', function() {
    let testHuman = new Human("Rick Sanchez", ("August 31, 1991"));
    let newPlanetaryAge = testHuman.planetAgeCalculator(venusYear);
    expect(newPlanetaryAge).toEqual(42);
    expect(newPlanetaryAge).not.toEqual(26);
  });
});

//Testing same function planetAgeCalculator but for Mars Years
describe('planetAgeCalculator', function() {
  it('should test if the users age is returned in Venus years', function() {
    let testHuman = new Human("Rick Sanchez", ("August 31, 1991"));
    let newPlanetaryAge = testHuman.planetAgeCalculator(marsYear);
    expect(newPlanetaryAge).toEqual(13);
    expect(newPlanetaryAge).not.toEqual(26);
  });
});

//Testing same function planetAgeCalculator but for Jupiter Years
describe('planetAgeCalculator', function() {
  it('should test if the users age is returned in Venus years', function() {
    let testHuman = new Human("Rick Sanchez", ("August 31, 1991"));
    let newPlanetaryAge = testHuman.planetAgeCalculator(jupiterYear);
    expect(newPlanetaryAge).toEqual(2);
    expect(newPlanetaryAge).not.toEqual(26);
  });
});
