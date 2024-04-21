# Be A JavaScript Javelin

## Modules

- Module-1: Fundamental Concepts of Conditional, Array & Loops
- Module-2: Fundamentals of String, Objects and Functions
- Module-3: Advanced JavaScript Concepts for Level 2
- Conceptual Session-1: Unlocking Next Level JavaScript Essentials

### Module-1

1. Compare variables and comparison operator
2. Introduction to Conditionals
3. Introduction to if Else Condition
4. Multiple condition Logical Operators
5. Multi level if-else if-else condition
6. (Advanced) if-else shorthand Ternary Operator
7. (Advanced) Logical Not Operator
8. Array Length, index, Get and set by index
9. Add Remove elements form array using push, pop, shift, upshift
10. Introduction to For Loop
11. Problem solving with For Loop
12. Different ways to use loop

### Module-2

1. String comparison lowercase, uppercase and trim
2. String slice, join, concat and includes
3. Introduction to Objects properties and values
4. Multiple ways to get, set object properties
5. Keys, Values, nested Objects and delete
6. Loop an Object and ways to declare an Object
7. What are Function and Function syntax
8. Add Function parameter, handle Multiple parameters
9. How Function works and argument vs parameters
10. Function return and set return value to a variable
11. Recap and conditional return of add Odd and Even
12. Different types of parameters of a Function
13. Sum of all numbers in an Array using Function
14. Return all the even numbers of an array

### Module-3

1. JavaScript Spread operators and React Operators
2. JavaScript Import, Export and Template Literals
3. JavaScript Destructuring, Accessing Objects and Optional Chaining
4. Understanding Conditional Logic - Ternary Operator, Truthy, Falsy
5. JavaScript Promises and Asynchronous Operations

### Conceptual Session-1

1.

# Compare variables and comparison operator

### Variable Naming Convention

- Single word
- No quote
- No gap or dash
- Can not start with number
- Can not be a keyword or reserved word
- Prefer camel case

### Operation

- +, -, \*, /, %
- +=, -=, \*=, /=
- isNaN
- null
- Number

### Comparison

- bigger: >
- less: <
- equal: ==
- greater than or equal: ≥
- less than or equal: ≤
- not equal: ≠
- and: &&
- or: ||

# Introduction to if Else Condition

## If statement

The if statement executes a statement if a specified condition is truthy

```js
if (condition) {
  // code be execute
}
```

## Else statement

If the condition is falsy, else statement is executed.

```js
if (5 > 3) {
  // code will be executed
} else {
  // code will not be wcecuted
}
```

```js
if (4 > 5) {
  // code will not be executed
} else {
  // code will be wcecuted
}
```

# Multi level if-else if-else condition

```js
const price = 10000;

if (price > 5000) {
  // 10% discount
  const discount = (price * 10) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}
```

```js
/**
 * ===== Multi level if-else if-else condition =====
 */

const price = 3000;

if (price > 5000) {
  // 10% discount
  const discount = (price * 10) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else if (price > 2500) {
  // 5% discount
  const discount = (price * 5) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}
```

**Example**

```js
// BMI (Body Mass Index) Calculator
const height = 64; // inches
const weight = 50; // kilograms

const underWeight = 18.4;
const normal = 24.9;
const overWeight = 39.9;
const obese = 40;

const heightInMeter = height * 0.0254; // covert to meters
const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);

if (bmi <= underWeight) {
  console.log(`BMI: ${bmi} Under weight`);
} else if (bmi > underWeight && bmi <= normal) {
  console.log(`BMI: ${bmi} Normal weight`);
} else if (bmi > normal && bmi <= overWeight) {
  console.log(`BMI: ${bmi} Over weight`);
} else if (bmi >= obese) {
  console.log(`BMI: ${bmi} Obese weight`);
}
```

# (Advanced) if-else shorthand Ternary Operator

```jsx
const isLeader = true;
let price = 1100;

if (isLeader === true) {
  if (price > 1000) {
    price = price / 2;
  } else {
    price = 0;
  }
} else {
  price = price + 100;
}

console.log(price);
```

**Ternary Operator Example**

```jsx
// semi advanced ternary
price = isLeader === true ? (price > 1000 ? price / 2 : 0) : price + 100;

console.log(price);
```

# (Advanced) Logical Not Operator (!)

- Negation operator
- Logical complement
- Flips the value of a Boolean
- If the value is true, returns false
- If the value is false, return true

**Logical Not is also used with non-Boolean values**

**More Example:**

```jsx
!true; // it returns false
!false; // it returns true
!""; // it returns true
!"Cat"; // it returns false
```

### Use Cases of Logical Not (!)

**Conditional Statement**

```jsx
// Conditional Statement
const isLogged = false;
if (!isLogged) {
  console.log("User is not logged in");
}
```

```jsx
// Toggling Boolean Values
let isEnabled = true; // toggling the boolean value
isEnabled = !isEnabled;

console.log(isEnabled); // output: false
```

```jsx
// Checking for Falsy Values
const inputValue = null;
if (!inputValue) {
  console.log("Input value is Falsy");
}
```

### Double Not (!!)

**What is it?**

**Double Not** forcefully converts any value to the corresponding Boolean value (true or false)

**Example:**

```jsx
!!true; // !!truthy returns true;
!!false; // !!falsy return false;
```

```jsx
let userId = 10;
console.log(!!userId);
// expected output -> true

console.log(!userId);
// expected output -> false

console.log(userId);
// expected output -> 10
```

# Array Length, Index, Get and Set By Index

```js
// array length
const numbers = [1, 2, 4, 54, 34, 54, 87];
console.log(numbers.length);
```

```js
// array index
const numberList = [1, 2, 4, 54, 34, 54, 87];
// index            0, 1, 2, 3, 4, 5, 6,

// get element value by index
console.log(numbers[2]);
const fourth = numbers[3];
console.log(fourth);

// set or update element value by index
numbers[1] = 999;
console.log(numbers);
```

# Add Remove elements form array using push, pop, shift, upshift

- push(): Appends new elements to the end of an array, and returns the new length of the array.
- pop(): Removes the last element from an array and returns that element. If the array is empty, undefined is returned and the array is not modified.
- shift(): Removes the first element from an array and returns that element. If the array is empty, undefined is returned and the array is not modified.
- unshift(): Adds new elements to the beginning of an array, and returns the new length of the array.

```jsx
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
```

# Introduction to For Loop

**While loop Example**

```jsx
let num = 0; // loop variable
while (num < 5) {
  // loop condition
  console.log(num); // loop statement
  num++; // loop variable change
}
```

**For Loop Structure**

```jsx
/**
 * For loop structure
 * for (  ;   :  ) {
 *
 * }
 * ----------------------
 *
 * for (first part; second part; third part) {
 *  loop statement
 * }
 *
 *--------------------------
 * for (loop variable; loop condition; loop variable change) {
 * loop statement
 * }
 */
```

```jsx
// for loop
for (let num = 0; num < 5; num++) {
  console.log(num);
}
```

**Example:**

```jsx
// even
for (let i = 0; i <= 20; i = i + 2) {
  console.log(i);
}

// odd
for (let i = 1; i <= 20; i = i + 2) {
  console.log(i);
}
```
