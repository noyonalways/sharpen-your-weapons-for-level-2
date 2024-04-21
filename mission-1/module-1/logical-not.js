/**
 * Title: (Advanced) Logical Not Operator (!)
 * Negation operator
 * Logical complement
 * Flips the value of Boolean
 * If the value is true, return false
 * If the value is false, return true
 */

// Logical Not operator also used with non-Boolean values

// examples:
!true; // it returns false
!false; // it returns true
!""; // it returns true
!"Cat"; // it returns false

// Conditional Statement
const isLogged = false;
if (!isLogged) {
  console.log("User is not logged in");
}

// Toggling Boolean Values
let isEnabled = true; // toggling the boolean value
isEnabled = !isEnabled;

console.log(isEnabled); // output: false

// Checking for Falsy Values
const inputValue = null;
if (!inputValue) {
  console.log("Input value is Falsy");
}

/**
 * Title: Double Not (!!). What is it?
 * Double Not forcefully converts any value to the corresponding Boolean value (true or false)
 */

// Examples:
!!true; // !!truthy returns true;
!!false; // !!falsy return false;

let userId = 10;

console.log(!!userId);
// expected output -> true

console.log(!userId);
// expected output -> false

console.log(userId);
// expected output -> 10
