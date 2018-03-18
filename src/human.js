const milliToYear = 31556736000;
const mercuryYear = 88;
const venusYear = 225;
const marsYear = 687;
const jupiterYear = 4380;


export class Human {
  constructor(name, birthDate) {
    this.name = name;
    this.birthDate = birthDate;
  }

//Built in javascript function DATE is able to either convert a specified date string into a date or can pull the exact current date. Output defaults to milliseconds, so the age is converted to years and the nearest whole number in order to be user friendly.
  ageCalculator() {
		let birthDate = new Date(this.birthDate);
		let dateDifference = Date.now() - birthDate;
		let age = Math.floor(dateDifference / milliToYear);
		return age;
	}

//This function calculates the users age just like age calculator, but then also converts the age to whichever planet the user would like and outputs whole number age for user friendliness.
  planetAgeCalculator(planetYear) {
    let birthDate = new Date(this.birthDate);
    let dateDifference = Date.now() - birthDate;
    let age = Math.floor(dateDifference / milliToYear);
    let planetaryAge = Math.floor((age*365) / planetYear);
    return planetaryAge;
  }
}
