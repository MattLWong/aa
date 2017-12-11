function soundMaker(sound, times) {

  function makeSound() {
    console.log(`${sound}`);
  }

  for(let i = 0; i < times; i++) {
    makeSound();
  }
}
// soundMaker('woof', 5);

function summation(arr) {
  let sum = 1;

  function summer() {
    for(let i = 0; i < arr.length; i++) {
      sum *= arr[i];
    }
  }

  summer();

  return sum;
}

// console.log(summation([1,2,3,4]));

let callback = function() {
  console.log("It has been 5 seconds");
}

let timeToWait = 5000;
//
// global.setTimeout(function() {
//   console.log("It has been 5 seconds");
// }, timeToWait)


var cat = {
  name: "f",
  age: 8,
  purr: function() {
    console.log(`${this.name} goes meow!`);
  }
}

function logIfEven(num) {
  if (num % 2 === 0) {
    console.log(`${num} is an even number!`);
  }
}

// [1, 2, 3].forEach(logIfEven);

let count = 0;

function sum(nums) {
  function addNum(num) {
    count += num;
  }

  for (let i = 0; i < nums.length; i++) {
    addNum(nums[i])
  }

  return count;
}

// console.log(sum([1,3,5]));
// console.log(sum([1,3,5]));

function Counter() {
  let count = 1;

  return () => count++;
}

let counter = new Counter();

// console.log(counter());
// console.log(counter());

"use strict";

global.local;

function subRoutine() {
  local = 'oops';
  console.log(local);
}

// subRoutine();
// console.log(local);

function scheduleGreatMovieReminder(movie) {
  // remind in one min
  global.setTimeout(function () {
    console.log(`Remember to watch: ${movie}`);
  }, 5 * 1000);
  console.log(`Timer set for ${movie}`)
}

// scheduleGreatMovieReminder("Citizen Kane");
// scheduleGreatMovieReminder("Touch of Evil");
// scheduleGreatMovieReminder("The Third Man");

const readline = require('readline');

// const reader = readline.createInterface({
//   // it's okay if this part is magic; it just says that we want to
//   // 1. output the prompt to the standard output (console)
//   // 2. read input from the standard input (again, console)
//
//   input: process.stdin,
//   output: process.stdout
// });

// reader.question("What is your name?", function (answer) {
//   console.log(`Hello ${answer}!`);
// })

// console.log("Last program line");


const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addTwoNumbers(callback) {
  // Notice how nowhere do I return anything here! You never return in
  // async code. Since the caller will not wait for the result, you
  // can't return anything to them.

  reader.question("Enter #1: ", function (numString1) {
    reader.question("Enter #2: ", function (numString2) {
      const num1 = parseInt(numString1);
      const num2 = parseInt(numString2);

      callback(num1 + num2);
    });
  });
}

// addTwoNumbers(function (result) {
//   console.log(`The result is: ${result}`);
//   reader.close();
// });

function absurdTimesAsync (numTimes, fnAsync, completionFn) {
  let i = 0;

  function loopStep () {
    if (i == numTimes) {
      // we're done, stop looping
      completionFn();
      return;
    }

    i++;

    // fnAsync is an asynchronous function that takes a callback (in this case loopStep)
    fnAsync(loopStep);
  }

  loopStep();
}

function addTwoNumbersAsync(callback) {
  reader.question("Enter #1: ", function (numString1) {
    reader.question("Enter #2: ", function (numString2) {
      const num1 = parseInt(numString1);
      const num2 = parseInt(numString2);

      callback(num1 + num2);
    });
  });
}

let totalSum = 0;

function addTwoNumbersAndIncrementAsync(callback) {
  addTwoNumbersAsync(function (result) {
    totalSum += result;

    console.log(`Sum: ${result}`);
    console.log(`Total Sum: ${totalSum}`);

    callback();
  });
}

function outputResultAndCloseReader () {
  console.log(`All done! Total Sum: ${totalSum}`);
  reader.close();
}

absurdTimesAsync(3, addTwoNumbersAndIncrementAsync, outputResultAndCloseReader);
