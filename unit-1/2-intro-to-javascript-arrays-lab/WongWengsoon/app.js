/*
Exercise 1: Define an empty array

// 1) Create an empty array and assign it to a variable called `foods`.

// Exercise 1 has been completed for you:
// */

// const foods = [];
// console.log("Exercise 1 result:", foods);

// //Exercise 2
// const foods = ["pizza", "cheeseburger"];
// console.log("Exercise 2 result:", foods);

// //Exercise 3
// const foods = ["pizza", "cheeseburger"];
// foods.unshift("taco");
// console.log("Exercise 3 result:", foods);

//Exercise 4
// const foods = ["taco", "pizza", "cheeseburger"];
// const favFood = foods[1];
// console.log("Exercise 4 result:", favFood);

//Exercise 5
// const foods = ["taco", "pizza", "cheeseburger"];
// foods.splice(2, 0, "tofu");
// console.log("Exercise 5 results:", foods);

//Exercise 6
// const foods = ["taco", "pizza", "cheeseburger"];
// foods.splice(1, 1, "sushi", "cupcake"); //start at which index ? , delete how many? , insert what?
// console.log("Exercise 5 results:", foods);

/*
Exercise 7: Using the `slice()` method
1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.
2) Assign it to a variable named `yummy`.
Complete Exercise 7 in the space below:
*/
// const foods = ["taco", "pizza", "cheeseburger"];
// foods.splice(1, 1, "sushi", "cupcake");
// const yummy = foods.slice(1, 3); //based on index
// //console.log(foods.slice(1))
// console.log("Exercise 7 result:", yummy);

/*
Exercise 8: Finding an index
1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 
2) Assign it to a variable named `soyIdx`.
Complete Exercise 8 in the space below:
*/
// const foods = ["taco", "pizza", "cheeseburger"];
// foods.splice(2, 0, "tofu");
// const soyIdx = foods.indexOf("tofu");
// console.log("Exercise 8 result:", soyIdx);

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/
// const foods = ["taco", "sushi", "cupcake", "tofu", "cheeseburger"];
// const allFoods = foods.join(" -> ");
// console.log("Exercise 9 result:", allFoods);

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/
// const foods = ["taco", "sushi", "cupcake", "tofu", "cheeseburger"];
// const hasSoup = foods.includes("soup");
// console.log("Exercise 10 result:", hasSoup);

/*
Exercise 11: Odd numbers from an array
1) Choose a method to iterate through the `nums` array.
2) Push each odd number to a new array named `odds`.
Hint: Initialize the `odds` variable to an empty array before the iteration.
Complete Exercise 11 in the space below:
*/
// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
// const odds = [];
// for (let i = 0; i < nums.length; i++) {
//   const num = nums[i];
//   if (num % 2 !== 0) {
//     odds.push(num);
//   }
// }
// console.log("Exercise 11 result:", odds);

/*
Exercise 12: FizzBuzz with arrays
1) Choose a method to iterate through the `nums` array. 
2. As you loop, sort the numbers into new arrays based on the following rules:
   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.
   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.
Complete Exercise 12 in the space below:
*/

// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
// const fizz = [];
// const buzz = [];
// const fizzbuzz = [];
// for (let i = 0; i < nums.length; i++) {
//   const num = nums[i];

//   if (num % 3 === 0) {
//     fizz.push(num);
//   }

//   if (num % 5 === 0) {
//     buzz.push(num);
//   }

//   if (num % 3 === 0 && num % 5 === 0) {
//     fizzbuzz.push(num);
//   }
// }
// console.log("Exercise 12 Results:");
// console.log("  fizz:", fizz);
// console.log("  buzz:", buzz);
// console.log("  fizzbuzz:", fizzbuzz);

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

// const numArrays = [
//   [100, 5, 23],
//   [15, 21, 72, 9],
//   [45, 66],
//   [7, 81, 90],
// ];

// const numList = numArrays[numArrays.length - 1];

// console.log("Exercise 13 result:", numList);

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

// const numArrays = [
//   [100, 5, 23],
//   [15, 21, 72, 9],
//   [45, 66],
//   [7, 81, 90],
// ];

// num = numArrays[2][1];

// console.log("Exercise 14 result:", num);

/*
Exercise 15: Nested array sum

1) Use any looping methods to sum up all numbers within `numArrays` nested arrays.
2) Assign the sum to a variable called `total`.
Hint: Be sure to declare and initialize the total variable before the iterations.
Complete Exercise 15 in the space below:
*/

const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
];

let total = 0;

for (let i = 0; i < numArrays.length; i++) {
  const innerArray = numArrays[i];

  for (let j = 0; j < innerArray.length; j++) {
    total += innerArray[j];
  }
}

console.log("Exercise 15 result:\n", total);
