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

## Compare variables and comparison operator

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

## Introduction to if Else Condition

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

## Multi level if-else if-else condition

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
