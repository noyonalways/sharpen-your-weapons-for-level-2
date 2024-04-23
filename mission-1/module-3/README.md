<h1>Module-3: Advanced JavaScript Concepts for Level 2</h1>

- [1. JavaScript Spread operators and Rest Operators](#1-javascript-spread-operators-and-rest-operators)
  - [Spread Operators (Array)](#spread-operators-array)
  - [Spread Operators (Object)](#spread-operators-object)
  - [REST Operators](#rest-operators)
- [2. JavaScript Import, Export and Template Literals](#2-javascript-import-export-and-template-literals)

# 1. JavaScript Spread operators and Rest Operators

### Spread Operators (Array)

```jsx
const myArray = [1, 2, 3];
const myCopiedArray = myArray;

/**
 * We know that array is non-primitive or reference type data.
 * We we modify the original array or the copied array it will reflect both.
 */

myArray.push(4);
myCopiedArray.push(5);
console.log(myArray);
console.log(myCopiedArray);
```

```jsx
/**
 * We need only the elements from the original array then we will dot this
 */

const myArray = [1, 2, 3];
const copiedArray = [myArray[0], myArray[1], myArray[2]];

myArray.push(4);
copiedArray.push(5);

console.log(myArray); // [ 1, 2, 3, 4 ]
console.log(copiedArray); // [1, 2, 3, 5];

/**
 * copy elements from the an by index is very difficult in the long length array.
 * JS provides us the power to do this using the spread operator  (...)
 */

const anotherArray = [...myArray];
console.log(anotherArray);

anotherArray.push(6);
console.log(anotherArray);
```

### Spread Operators (Object)

```jsx
// spread operators also work on objects
const myInfo = {
  name: "Noyon",
  age: 20,
};

const address = {
  city: "Dhaka",
  country: "Bangladesh",
};

const finalObject = {
  ...myInfo,
  ...address,
};

console.log(finalObject);
```

### REST Operators

```jsx
// REST Operators
// rest parameter must be last formal parameter
const addNumbers = (firstNum, ...params) => {
  let sum = 0;
  params.forEach((num) => {
    sum = sum + num;
  });

  return sum;
};

console.log(addNumbers(1, 2, 3, 4, 5));
```

# 2. JavaScript Import, Export and Template Literals

**greetings.js**

```jsx
const greetMessage = (name) => {
  // console.log("Hello " + name + "the Next Level Developer");
  console.log(`Hello ${name} the Next Level Developer.`); // template literals
};

// default export
export default greetMessage;
```

```jsx
// named export
export const welcomeMessage = (name) => {
  console.log(`Welcome ${name} to this journey.`);
};

// also export by do this
export { welcomeMessage };
```

**test.js**

```jsx
import greetMessage, { welcomeMessage } from "./greeting.js";

greetMessage("noyon");

welcomeMessage("rahman");
```

```jsx
import greetMessage from "./greeting.js";

greetMessage("noyon");
```
