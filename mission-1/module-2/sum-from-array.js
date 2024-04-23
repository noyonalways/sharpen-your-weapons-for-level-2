/**
 * Objective: Write a function to give me the sum of all numbers in an array.
 * step-1: declare a function
 * step-2: call check whether the function is called properly
 * step-3: set a parameter (s)
 * step-4: pass the parameter (s), check whether is passed in a proper format
 */

function sumOfNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const total = sumOfNumbers([1, 2, 3, 4, 5]);

console.log(total);
