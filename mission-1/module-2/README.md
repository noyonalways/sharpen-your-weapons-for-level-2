<h1>Module-2: Fundamentals of String, Objects and Functions</h1>

- [1. String comparison `lowercase()`, `uppercase()` and `trim()`](#1-string-comparison-lowercase-uppercase-and-trim)
- [2. String `slice()`, `join()`, `concat()` and `includes()`](#2-string-slice-join-concat-and-includes)
- [3. Introduction to Objects properties and values](#3-introduction-to-objects-properties-and-values)
  - [Key Differences](#key-differences)
- [4. Multiple ways to get, set object properties](#4-multiple-ways-to-get-set-object-properties)
- [5. Keys, Values, nested Objects and delete](#5-keys-values-nested-objects-and-delete)
- [6. Loop an Object and ways to declare an Object](#6-loop-an-object-and-ways-to-declare-an-object)
- [7. What are Function and Function syntax](#7-what-are-function-and-function-syntax)
  - [Function](#function)
  - [What is Function in JS?](#what-is-function-in-js)
- [8. Add Function parameter, handle Multiple parameters](#8-add-function-parameter-handle-multiple-parameters)
- [9. How Function works and argument vs parameters](#9-how-function-works-and-argument-vs-parameters)
- [10. Function return and set return value to a variable](#10-function-return-and-set-return-value-to-a-variable)
- [11. Recap and conditional return of add Odd and Even](#11-recap-and-conditional-return-of-add-odd-and-even)
- [12. Different types of parameters of a Function](#12-different-types-of-parameters-of-a-function)
- [13. Sum of all numbers in an Array using Function](#13-sum-of-all-numbers-in-an-array-using-function)
- [14. Return all the even numbers of an array](#14-return-all-the-even-numbers-of-an-array)

# 1. String comparison `lowercase()`, `uppercase()` and `trim()`

```jsx
// Uppercase: ABCD EFG
// Lowercase: abcd efg
```

```jsx
// convert to lowercase
const school = "Ranigonj High School";
school.toLowerCase();
console.log(school);

// convert to uppercase
school.toUpperCase();
console.log(school);
```

```jsx
// to remove white space from the whole string
const drink = "Water";
const liquid = "Water  ";

drink === liquid; // false
dirnk.trim() === liquid.trim(); // true

// trimStart() -> remove white spade from start
// trimEnd() -> remove white space from end
```

# 2. String `slice()`, `join()`, `concat()` and `includes()`

**Example:**

```jsx
const sentence = "I am learning Web Dev.";

// reverse the sentence
let reverse = "";
for (const letter of sentence) {
  reverse = letter + reverse;
}
console.log(reverse); // .veD beW gninrael ma I

// shortcut
const reversed = sentence.split("").reverse().join("");
console.log(reversed); // .veD beW gninrael ma I
```

# 3. Introduction to Objects properties and values

```jsx
// student (This are primitive data types) or knows as primary data type
const age = 21;
const school = "Ranigonj High School";
const isPassed = true;
const subjects = ["Bangla", "English", "Physics", "Math"];

// bottle
const bottleColor = "White";
const bottlePrice = 35;
const bottleDrinks = "Water";

// object
const bottle = {
  color: "White",
  price: 35,
  drinks: "Water",
};

const student = {
  age: 21,
  school: "Ranigonj High School",
  isPassed: true,
  subjects: ["Bangla", "English", "Physics", "Math"],
};

/**
 * Object is non-primitive data type
 */

/**
 * - String : text data
 * - Number : numeric data
 * - Boolean : `true` or `false`
 * - Null : intentional absence of value (`void` in some other language)
 * - Undefined : absence of value due to not yet being initialized
 * - BigInt : Very big numeric value
 * - Symbol : Works as a unique identifier
 */
```

## Key Differences

- **Mutability**: Primitive data types are immutable, meaning their values cannot be changed once assigned. Non-primitive data types are mutable and can be modified.
- **Storage**: Primitive data types are stored directly in memory, whereas non-primitive data types are stored as references to their values in memory.
- **Comparison**: Primitive data types are compared by value, while non-primitive data types are compared by reference.
- **Examples**: Numbers, strings, and booleans are examples of primitive data types, while objects, arrays, and functions are examples of non-primitive data types.

# 4. Multiple ways to get, set object properties

```jsx
const person = {
  name: "John",
  age: 25,
  profession: "developer",
  salary: 25000,
  isMarried: true,
  "favorite places": ["Bandorban", "Saintmartin", "Kuakata"],
};

// get properties by dot notation
console.log(person.name);

// get properties by bracket notation
console.log(person["profession"]);

// set properties by dot notation
person.salary = 30000;
console.log(person);

// set properties by bracket notation
person["profession"] = "programmer";
console.log(person);

person["favorite places"] = ["Maldives", "Vietnam", "Bali"];
```

# 5. Keys, Values, nested Objects and delete

```jsx
const computer = {
  brand: "Custom Made",
  price: 70000,
  processor: "i5",
  ram: "8gb",
  ssd: "256gb",
  monitor: "hp",
};

// get keys
const keys = Object.keys(computer);
console.log(keys);

// get values
const values = Object.values(computer);
console.log(values);

// Nested Object
const college = {
  name: "DMC",
  class: ["11", "12"],
  events: ["Science Fair", "Victory Day", "21 Feb"],
  unique: {
    color: "white",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};

// nested properties
console.log(college.unique.color);

// more nested properties
console.log(college.unique.result.merit);

// access by bracket notation
console.log(college.unique["result"].gpa);
```

# 6. Loop an Object and ways to declare an Object

```jsx
const mobile = {
  brand: "POCO",
  price: 15000,
  color: "blue",
  camera: "13mp",
};

// for in
for (const key in mobile) {
  console.log(key, mobile[key]);
}

// Object.keys()
const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys) {
  console.log(key, ":", mobile[key]);
}

// Ways of Declarations of an Object
const pen = {};
const pencil = new Object();
const rubber = Object.create({});
// using class constructor
```

# 7. What are Function and Function syntax

Imagine a situation where you are the youngest member of your family.

Everyone calls on yo to perform various tasks. You are like. Why every time me ?

### Function

Today we are going to talk about how to handle tasks through functions to improve code’s

- Reusability
- Readability

### What is Function in JS?

- A block of code
- A set of statements (subprogram / block of code) that performs a task when it is called.
- Maintains a relationship with input and output

**Example:**

```jsx
// Declaration Function In JS
function programming() {
  console.log("I love programming");
}

// Function Call
programming();

// Example
function brushTeeth() {
  console.log("Pick up the Brush");
  console.log("Add paste");
  console.log("Now brush your teeth for 2 minutes");
}

brushTeeth();
```

# 8. Add Function parameter, handle Multiple parameters

```jsx
// function parameter
function doTheWork(name) {
  console.log(`${name} do the work.`);

  // the parameter is only available in this block
}

doTheWork("John Doe");

// square function
function doTheSquare(number) {
  const result = number * number;
  console.log(result);
}

doTheSquare(4);

// We can pass multiple arguments to the function
function addAll(a, b, c, d, e) {
  const total = a + b + c + d + e;
  console.log(total);
}

addAll(1, 2, 3, 4, 5);
```

# 9. How Function works and argument vs parameters

```jsx
function difference(fatherAge, myAge) {
  //                  parameters
  const diff = fatherAge - myAge;
  console.log(diff);
}

/**
 * When we declare a function the function will receive parameters
 * When we call the function then we pass arguments
 * There is no difference between parameter and argument
 */

difference(45, 20);
//        arguments
```

# 10. Function return and set return value to a variable

```jsx
function tenTimes(number) {
  const result = number * 10;
  return result;
}

/**
 * When we explicity didn't return anything from a function then the function will return undefined
 * We can return a single thing from a function. like: number, string, object, array, boolean
 * When function returns something we can store it to a variable
 */

// another example
function cutHalf(number) {
  return number / 2;
}
```

# 11. Recap and conditional return of add Odd and Even

```jsx
// even
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(2));

// odd
function isOdd(number) {
  if (number % 2 === 1) {
    return true;
  }
  return false;
}

console.log(isOdd(20));
```

# 12. Different types of parameters of a Function

```jsx
/**
 * For a given string tell me whether is has even number of characters or not
 */

function evenSizedString(str) {
  const size = str.length;
  console.log(str, size);

  if (size % 2 === 0) {
    console.log("even size", size);
  } else {
    console.log("odd size", size);
  }
}

function doubleOrTriple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

console.log(doubleOrTriple(4, true));
console.log(doubleOrTriple(4, false));

function numberOfElements(numbers) {
  const len = numbers.length;
  return len;
}

console.log(numberOfElements([1, 2, 3, 4, 5]));
```

# 13. Sum of all numbers in an Array using Function

```jsx
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
```

# 14. Return all the even numbers of an array

```jsx
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
```
