import { Human } from '../src/human.js';

const milliToYear = 31556736000;
const mercuryYear = 88;
const venusYear = 225;
const marsYear = 687;
const earthYear = 1;
const jupiterYear = 4380;
const maleLifeExpect = 76;
const femaleLifeExpect = 81;

//This test passing confirms that the constructor is returning the values that I am expecting it to.
describe('Human', function() {
  it('should test whether or not a Human has its properties', function() {
    let testHuman = new Human("Rick Sanchez", ("October 13, 2014"), "male");
    expect(testHuman.name).toEqual("Rick Sanchez");
    expect(testHuman.birthDate).toEqual("October 13, 2014");
    expect(testHuman.gender).toEqual("male");
  });
});

//In order to calculate a users age, first a new human needs to be instantiated. The function is always going to return a year because of the math floor in the function.
describe('ageCalculator', function() {
  it('should test if the users exact age is returned', function() {
    let testHuman = new Human("Rick Sanchez", ("August 30, 1991"), "male");
    let newAge = testHuman.ageCalculator();
    expect(newAge).toEqual(26);
  });
});

//Initially each planetary age was going to be a different SPEC, but it felt overly repetitive and was DRYED to a function that takes planetaryYear as a parameter.
describe('planetAgeCalculator', function() {
  it('should test if the users age is returned in Mercury years', function() {
    let testHuman = new Human("Rick Sanchez", ("August 30, 1991"), "male");
    let newPlanetaryAge = testHuman.planetAgeCalculator(mercuryYear);
    expect(newPlanetaryAge).toEqual(107);
    expect(newPlanetaryAge).not.toEqual(26);
  });
});

//Testing same function planetAgeCalculator but for Venus Years
describe('planetAgeCalculator', function() {
  it('should test if the users age is returned in Venus years', function() {
    let testHuman = new Human("Rick Sanchez", ("August 30, 1991"), "male");
    let newPlanetaryAge = testHuman.planetAgeCalculator(venusYear);
    expect(newPlanetaryAge).toEqual(42);
    expect(newPlanetaryAge).not.toEqual(26);
  });
});

//Testing same function planetAgeCalculator but for Mars Years
describe('planetAgeCalculator', function() {
  it('should test if the users age is returned in Venus years', function() {
    let testHuman = new Human("Rick Sanchez", ("August 30, 1991"), "male");
    let newPlanetaryAge = testHuman.planetAgeCalculator(marsYear);
    expect(newPlanetaryAge).toEqual(13);
    expect(newPlanetaryAge).not.toEqual(26);
  });
});

//Testing same function planetAgeCalculator but for Jupiter Years
describe('planetAgeCalculator', function() {
  it('should test if the users age is returned in Venus years', function() {
    let testHuman = new Human("Rick Sanchez", ("August 30, 1991"), "male");
    let newPlanetaryAge = testHuman.planetAgeCalculator(jupiterYear);
    expect(newPlanetaryAge).toEqual(2);
    expect(newPlanetaryAge).not.toEqual(26);
  });
});

//This test is to determine if the function is returning the correct life expectancy in years. The function takes in planetary years as a parameter, and the user will have a different result depending on which gender they choose. This test is for male.
describe('planetLifeExpectancy', function() {
  it('should test if the users planetary life expectancy is returned', function() {
    let testHuman = new Human("Rick Sanchez", ("August 30, 1991"), "male");
    let lifeExpectancy = testHuman.planetLifeExpectancy(earthYear);
    expect(lifeExpectancy).toEqual(50);
    expect(lifeExpectancy).not.toEqual(55);
  });
});

//Testing the same function as the previous test but the gender is changed to female.
describe('planetLifeExpectancy', function() {
  it('should test if the users planetary life expectancy is returned', function() {
    let testHuman = new Human("Rick Sanchez", ("August 30, 1991"), "female");
    let lifeExpectancy = testHuman.planetLifeExpectancy(earthYear);
    expect(lifeExpectancy).toEqual(55);
    expect(lifeExpectancy).not.toEqual(50);
  });
});

//Testing the same function but where the users life expectancy is equal to their age so a semi-ominoue message should be returned.
describe('planetLifeExpectancy', function() {
  it('should test if an ominous message is returned', function() {
    let testHuman = new Human("Rick Sanchez", ("August 30, 1941"), "male");
    let lifeExpectancy = testHuman.planetLifeExpectancy(earthYear);
    expect(lifeExpectancy).toEqual("Yikes! The end may be near for you, or you have many long rewarding years to follow.");
  });
});

//Testing the same function but where the users life expectancy is less than their age so a congratulatory message is returned.
describe('planetLifeExpectancy', function() {
  it('should test if an ominous message is returned', function() {
    let testHuman = new Human("Rick Sanchez", ("August 30, 1935"), "male");
    let lifeExpectancy = testHuman.planetLifeExpectancy(earthYear);
    expect(lifeExpectancy).toEqual("Congrats! You have already surpassed the life expectancy by -6 years!");
  });
});
