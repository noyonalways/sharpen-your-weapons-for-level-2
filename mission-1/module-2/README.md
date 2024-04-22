<h1>Module-2: Fundamentals of String, Objects and Functions</h1>

- [1. String comparison `lowercase()`, `uppercase()` and `trim()`](#1-string-comparison-lowercase-uppercase-and-trim)
- [2. String `slice()`, `join()`, `concat()` and `includes()`](#2-string-slice-join-concat-and-includes)
- [3. Introduction to Objects properties and values](#3-introduction-to-objects-properties-and-values)
  - [Key Differences](#key-differences)
- [4. Multiple ways to get, set object properties](#4-multiple-ways-to-get-set-object-properties)
- [5. Keys, Values, nested Objects and delete](#5-keys-values-nested-objects-and-delete)

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
