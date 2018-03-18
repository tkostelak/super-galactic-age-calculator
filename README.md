# Super Galactic Age Calculator

### Node/Javascript Exercise for Epicodus, 03/18/2018
### By Tyler Kostelak

## Description
_This thoroughly tested project provides the business logic for a website that calculates different planetary ages and life expectancies for the user._

## Specifications
### Requirements

* _Take a person’s age in years and convert it into seconds._
* _Take two dates and determine the difference, in seconds, between the two._
* _Return the age of a human in Mercury, Venus, Mars, and Jupiter Years._
* _Determine how many years a user has left to live on each planet._
* _Check if a user has already surpassed the average life expectancy. If they have, they should receive a different output._

### Behavior Driven Development

1. First, the app should be able to convert any given date into seconds.

  Example input: "March 16, 2018"
  Example Output: 63656986400

2. Once a date can be converted into seconds, the app should be able to find the difference between two dates.

  Example input: Date One: ("October 31, 1999") Date Two: ("October 31, 2017")
  Example Output: 568080000000

3. After the difference can be found between two dates, the user should be able to input their birthday and the current date and the app should return their exact age.

  Example input: "August 30, 1991"
  Example output: 26

4. Now that the app can calculate an exact age, the user should be able to convert their age into Mercury years, Venus years, Mars years and Jupiter years.

  Example input: "August 30, 1991"
  Example output(Mercury Years): 107

5. Once the users age can be converted into Mercury, Venus, Mars and Jupiter Years, then they should be able to input their gender and determine how many years they have left to live on each planet.

  Example input: "August 30, 1991"
  Example output: 50

6. Once a user is able to have their respective galactic life expectancies calculated, if their life expectancy is less than their age, then they should receive a congratulatory message. If their life expectancy is equal to 0, they should receive a mildly ominous message, and everything above 0 should just display the amount of years they have left.

  Example input: "August 30, 1935", "male"
  Example output: "Congrats! You have already surpassed the life expectancy by -6 years!"

  Example input: ""August 30, 1941", "male"
  Example output: ""Yikes! The end may be near for you, or you have many long rewarding years to follow."

## Setup/Installation Requirements
* Clone this repository to your desktop.
* Navigate to the cloned directory in a terminal capable of running npm commands.
* Run the command >npm install
* If you would like to test the specs, Run the command >npm test
* If you would like to run the application, Run the command >npm run start
* Navigate to localhost:8080 in your browser

## Known Bugs
There are no known bugs at this time.

## Support and contact details
If you have suggestions for how to help me make any additions, or if you have other feedback, please feel free to contact me at tkostelak@gmail.com. All feedback is welcome, keep in mind that the primary focus of this project is business-end Javascript.

## Technologies Used
Node
Javascript
Karma
Jasmine

## License
The software is licensed under the MIT license.

Copyright (c) 2018 Tyler Kostelak
