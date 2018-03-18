const milliToYear = 31556736000;

export class Human {
  constructor(name, birthDate) {
    this.name = name;
    this.birthDate = birthDate;
  }

  ageCalculator() {
		let birthDate = new Date(this.birthDate);
		let dateDifference = Date.now() - birthDate;
		let age = Math.floor(dateDifference / milliToYear);
		return age;
	}


}
