<h1>Module-1: Fundamental Concepts of Conditional, Array & Loops</h1>

- [1. Compare variables and comparison operator](#1-compare-variables-and-comparison-operator)
  - [Variable Naming Convention](#variable-naming-convention)
  - [Operation](#operation)
  - [Comparison](#comparison)
- [2. Introduction to if Else Condition](#2-introduction-to-if-else-condition)
  - [If statement](#if-statement)
  - [Else statement](#else-statement)
- [3. Multi level if-else if-else condition](#3-multi-level-if-else-if-else-condition)
- [4. (Advanced) if-else shorthand Ternary Operator](#4-advanced-if-else-shorthand-ternary-operator)
- [5. (Advanced) Logical Not Operator (!)](#5-advanced-logical-not-operator-)
  - [Use Cases of Logical Not (!)](#use-cases-of-logical-not-)
  - [Double Not (!!)](#double-not-)
- [6. Array Length, Index, Get and Set By Index](#6-array-length-index-get-and-set-by-index)
- [7. Add Remove elements form array using `push()`, `pop()`, `shift()`, `upshift()`](#7-add-remove-elements-form-array-using-push-pop-shift-upshift)
- [8. Introduction to For Loop](#8-introduction-to-for-loop)
- [9. Problem Solving With For Loop](#9-problem-solving-with-for-loop)
  - [Problems (For Loop)](#problems-for-loop)
  - [Problems (While Loop)](#problems-while-loop)

# 1. Compare variables and comparison operator

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

# 2. Introduction to if Else Condition

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

# 3. Multi level if-else if-else condition

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

# 4. (Advanced) if-else shorthand Ternary Operator

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

# 5. (Advanced) Logical Not Operator (!)

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

# 6. Array Length, Index, Get and Set By Index

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

# 7. Add Remove elements form array using `push()`, `pop()`, `shift()`, `upshift()`

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

# 8. Introduction to For Loop

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

# 9. Problem Solving With For Loop

**Using For Loop**

```jsx
// incremental loop
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// decremental loop
for (let i = 20; i >= 1; i--) {
  console.log(i);
}

// calculate sum
let sum = 0;
for (let num = 11; num <= 20; num++) {
  sum = sum + num;
  // sum += num; shorter version
}
console.log(sum);
```

**Using While Loop**

```jsx
// incremental while loop
let num = 1;
while (num <= 20) {
  console.log(num);
  num++;
}

// decremental while loop
let num2 = 20;
while (num2 >= 1) {
  console.log(num2);
  num2--;
}

// calculate sum using while loop
let sum = 0;
let num3 = 11;
while (num3 <= 20) {
  sum = sum + num3;
  num3++;
}

console.log(sum);
```

## Problems (For Loop)

1. I will invest at least 6 hours every single day for next 60 days!" this message 60 times. So display this.
2. Odd-Even
   1. Find all the odd numbers from 61 to 100.
   2. Find all the even numbers from 78 to 98.
3. Calculate Sum
   1. Display sum of all the odd numbers from 91 to 129.
   2. Display sum of all the even numbers from 51 to 85.
4. Generate a multiplication table for number 9
5. Implement a countdown timer that counts down from 81 to 65.

## Problems (While Loop)

1. I will invest at least 6 hours every single day for next 60 days!" this message 60 times. So display this.
2. Odd-Even
   1. Find all the odd numbers from 61 to 100.
   2. Find all the even numbers from 78 to 98.
3. Calculate Sum
   1. Display sum of all the odd numbers from 81 to 131.
   2. Display sum of all the even numbers from 206 to 311.
4. As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
5. Implement a countdown timer that counts down from 21 to 15.
