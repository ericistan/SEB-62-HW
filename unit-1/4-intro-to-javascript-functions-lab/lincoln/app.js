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

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
// Let me try ternary expression
const isCharAVowel = (char) =>
  char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
    ? "Vowel"
    : "Not A Vowel";

console.log("Exercise 3 Result:", isCharAVowel("a"));
// Expected result would be vowel
