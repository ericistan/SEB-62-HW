/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};

console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));
//numbers 3 and 9 passed into x and y respectively of the function maxOfTwoNumbers
// result expected is to be 9 since the purpose of the function is to check and return the larger number
