/**
 * Create a function that will return only the even numbers
 * Return the sum of even numbers
 */

function evenNumbersOnly(numbers) {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

console.log(evenNumbersOnly([1, 2, 3, 4, 5])); // [2, 4]

function evenNumberSumOnly(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

console.log(evenNumberSumOnly([1, 2, 3, 4, 5])); // 6
