const numbers = [11, 22, 33, 44, 55, 66];
console.log(numbers);

// push(): Appends new elements to the end of an array, and returns the new length of the array.
numbers.push(77);
console.log(numbers);

// pop(): Removes the last element from an array and returns that element. If the array is empty, undefined is returned and the array is not modified.
numbers.pop();
console.log(numbers);

// shift(): Removes the first element from an array and returns that element. If the array is empty, undefined is returned and the array is not modified.
numbers.shift();
console.log(numbers);

// unshift(): Adds new elements to the beginning of an array, and returns the new length of the array.
numbers.unshift(88);
console.log(numbers);
