const milliToYear = 31556736000;
const mercuryYear = 88;
const venusYear = 225;
const marsYear = 687;
const earthYear = 1;
const jupiterYear = 4380;
const maleLifeExpect = 76;
const femaleLifeExpect = 81;

export class Human {
  constructor(name, birthDate, gender) {
    this.name = name;
    this.birthDate = birthDate;
    this.gender = gender;
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

    let age = this.ageCalculator();
    let planetaryAge = Math.floor((age*365) / planetYear);
    return planetaryAge;
  }

  //This function will determine a users life expectancy in either mercury, venus, mars, or jupiter years. To keep it simple, the app will only ask the user for their gender, and will use average life expectancies for their gender in the United States. If the users lift expectancy is less than, they receive a congrtulatory message, they receive an ominous message for equal to 0, and they just receive the years left for everything else.

  planetLifeExpectancy(planetYear) {

  let age = this.ageCalculator();
  let yearsLeft = 0;

  if(this.gender === "female") yearsLeft += ((femaleLifeExpect / planetYear) - age);
  if(this.gender === "male") yearsLeft += ((maleLifeExpect / planetYear) - age);

  if(yearsLeft === 0) return "Yikes! The end may be near for you, or you have many long rewarding years to follow."
  if(yearsLeft <= 0) return "Congrats! You have already surpassed the life expectancy by " + yearsLeft + " years!"
  else return yearsLeft;
  }
}
