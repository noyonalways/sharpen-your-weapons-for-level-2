// const myArray = [1, 2, 3];
// const myCopiedArray = myArray;

/**
 * We know that array is non-primitive or reference type data.
 * We we modify the original array or the copied array it will reflect both.
 */

// myArray.push(4);
// myCopiedArray.push(5);
// console.log(myArray);
// console.log(myCopiedArray);

/**
 * We need only the elements from the original array then we will dot this
 */

const myArray = [1, 2, 3];
const copiedArray = [myArray[0], myArray[1], myArray[2]];

myArray.push(4);
copiedArray.push(5);

// console.log(myArray); // [ 1, 2, 3, 4 ]
// console.log(copiedArray); // [1, 2, 3, 5];

/**
 * copy elements from the an by index is very difficult in the long length array.
 * JS provides us the power to do this using the spread operator  (...)
 */

const anotherArray = [...myArray];
// console.log(anotherArray);

anotherArray.push(6);
// console.log(anotherArray);

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
