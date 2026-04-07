// // Unit 1 - 4 Intro to JavaScript Functions Lab Exercise
// /*
// Exercise 1: maxOfTwoNumbers()

// In this exercise, create a function named maxOfTwoNumbers.
// It should take two numbers as inputs and return the larger number.
// If they're equal, return either one.

// Exercise 1 has been completed for you:
// */

// const maxOfTwoNumbers = (x, y) => {
//   if (x >= y) {
//     return x;
//   } else {
//     return y;
//   }
// };

// console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));
// //numbers 3 and 9 passed into x and y respectively of the function maxOfTwoNumbers
// // result expected is to be 9 since the purpose of the function is to check and return the larger number

// /*
// Exercise 2: isAdult()

// Write a function named isAdult. It should take an age (number)
// and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

// Example: isAdult(21) should return 'Adult'.

// Complete the exercise in the space below:
// */

// const isAdult = (x) => {
//   const adultAge = 18;
//   if (x >= adultAge) {
//     return "Adult";
//   } else {
//     return "Minor";
//   }
// };

// console.log("Exercise 2 Result:", isAdult(21));
// // Expect result to be Adult

// /*
// Exercise 3: isCharAVowel()

// Write a function named isCharAVowel that takes a single character as
// an argument. It should return true if the character is a vowel and
// false otherwise. For the purposes of this exercise, the character
// y should not be considered a vowel.

// Example: isCharAVowel('a') should return true.

// Desmond's comments
// you can also do this using a string of
// vowels "aeiou" and use the include function.

// Complete the exercise in the space below:
// */
// // Let me try ternary expression
// const isCharAVowel = (char) =>
//   char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
//     ? "Vowel"
//     : "Not a vowel";

// console.log("Exercise 3 Result:", isCharAVowel("a"));
// // Expected result would be vowel

// /*
// Exercise 4: generateEmail()

// Create a function named generateEmail. It should take two strings:
// a name and a domain. It should return a simple email address.

// Example: generateEmail('johnsmith', 'example.com')
// should return 'johnsmith@example.com'.

// Complete the exercise in the space below:
// */
// const generateEmail = (name, domain) => {
//   return name + "@" + domain;
// };
// console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));
// // Expected result would be johnsmith@example.com

// /*
// Exercise 5: greetUser()

// Define a function called greetUser. It should take a name and a
// time of day (morning, afternoon, evening) and return a personalized
// greeting.

// Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

// Complete the exercise in the space below:
// */

// // this is template literal
// const greetUser = (name, timeOfDay) => `Good ${timeOfDay}, ${name}!`;

// console.log("Exercise 5 Result:", greetUser("Sam", "morning"));
// // Expected result would be Good morning, Sam!

// /*
// Exercise 6: maxOfThree()

// Define a function, maxOfThree. It should accept three numbers
// and return the largest among them.

// Example: maxOfThree(17, 4, 9) should return 17.

// Complete the exercise in the space below:
// */

// // Practice declarative function
// function maxOfThree(x, y, z) {
//   if (x >= y && x >= z) {
//     return x;
//   } else if (y >= z) {
//     return y;
//   } else return z;
// }

// // Try ternary
// const maxOfThreeT = (x, y, z) => (x >= y && x >= z ? x : y >= z ? y : z);

// console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));
// console.log("Exercise 6 Result using ternary:", maxOfThreeT(5, 10, 8));
// Both expected result to be 10

// /*
// Exercise 7: calculateTip()

// Create a function called calculateTip. It should take two arguments:
// the bill amount and the tip percentage (as a whole number).
// The function should return the amount of the tip.

// Example: calculateTip(50, 20) should return 10.

// Complete the exercise in the space below:
// */
// const calculateTip = (bill, tipPercent) => (bill * tipPercent) / 100;

// console.log("Exercise 7 Result:", calculateTip(50, 20));
// // Expected result to be 10

// /*
// Exercise 8: convertTemperature()

// Write a function named convertTemperature.
// It takes two arguments: a temperature and a string representing the
// scale ('C' for Celsius, 'F' for Fahrenheit).
// Convert the temperature to the other scale.

// Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
// Example: convertTemperature(32, 'F') should return 0 (Celsius).

// Complete the exercise in the space below:
// */
// const convertTemperature = (temp, string) =>
//   string === "C" ? temp : string === "F" ? (temp * 9) / 5 + 32 : undefined;
// console.log("Exercise 8 Result:", convertTemperature(32, "C"));
// // Expected result should be 32 as there is no change

// /*
// Exercise 9: basicCalculator()

// Create a function named basicCalculator.
// It should take three arguments: two numbers and a string representing
// an operation ('add', 'subtract', 'multiply', 'divide').
// Perform the provided operation on the two numbers.
// In operations where the order of numbers is important,
// treat the first parameter as the first operand and the
// second parameter as the second operand.

// Example: basicCalculator(10, 5, 'subtract') should return 5.

// Complete the exercise in the space below:
// */

// Desmond's comments
// if you are using return, you do not need the
// break, as return already "breaks out" of the switch. Notice in VScode the break is slightly
// off colour, if you hover over it, VScode
// will tell you it is unreachable code.

// const basicCalculator = (x, y, str) => {
//   switch (str) {
//     case "add":
//       return x + y;
//       break;
//     case "subtract":
//       return x - y;
//       break;
//     case "multiply":
//       return x * y;
//       break;
//     case "divide":
//       return x / y;
//       break;
//   }
// };

// console.log("Exercise 9 Result:", basicCalculator(10, 5, "subtract"));

// /*
// Exercise 10: calculateGrade()

// Define a function called calculateGrade.
// It should take a numerical score and return the corresponding letter
// grade (A, B, C, D, F).

// For example, 90 and above yields an 'A', 80-89 is a 'B',
// and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

// Example: calculateGrade(100) should return A.

// Complete the exercise in the space below:
// */
// const calculateGrade = (grade) => {
//   if (grade <= 100 && grade >= 90) {
//     return "A";
//   } else if (grade < 90 && grade >= 80) {
//     return "B";
//   } else if (grade < 80 && grade >= 71) {
//     return "C";
//   } else if (grade < 70 && grade >= 61) {
//     return "D";
//   } else if (grade < 60 && grade >= 0) {
//     return "F";
//   } else return "invalid result";
// };

// console.log("Exercise 10 Result:", calculateGrade(85));
// Expected result is to be B

// // /*
// // Exercise 11: createUsername()

// // Define a function called createUsername.
// // It should take a first name and a last name and return a username.

// // The username should be a combination of the following:
// // - The first three letters of the first name.
// // - The first three letters of the last name.
// // - The total character count of the first and last name combined.

// // Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

// // Complete the exercise in the space below:
// // */

// // const fnArr and ltArr created to 1. split("") to convert string into array of letters
// // 2. slice(0, 3) select the first 3 elements o
// function createUsername(firstName, lastName) {
//   const fnArr = firstName.split("").slice(0, 3).join("");
//   const ltArr = lastName.split("").slice(0, 3).join("");
//   const nameCount = firstName.length + lastName.length;
//   //   return fnArr;
//   return `${fnArr}${ltArr}${nameCount}`;
// }

// console.log("Exercise 11 Result:", createUsername("Samantha", "Green"));
// // Expected result to be SamGre13

// /*
// Exercise 12: numArgs()

// Challenge yourself with numArgs.
// This function should return the count of arguments passed to it when called.

// Complete the exercise in the space below:
// */

// if the number of arguments passed into the function is not fixed, use ...others
const numArgs = (first, ...others) => {
  const arr = [first, ...others];
  // use array to contain all argument before return the length of it
  return arr.length;
};

console.log("Exercise 12 Result:", numArgs(1, 2, 3, 4));
