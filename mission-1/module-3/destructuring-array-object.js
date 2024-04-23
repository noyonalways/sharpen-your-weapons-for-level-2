const myFriends = ["Taj", "Salman", "Sazid"];

// Access element by index
console.log(myFriends[0]);

// Array Destructuring
const [bestFriend, normalFriend, goodFriend] = myFriends;
console.log(bestFriend);
console.log(normalFriend);
console.log(goodFriend);

/**
 * Array:
 * - Variable name can be anything / any name
 * - Position can not be changed. Position of array values are fixed
 */

// Object Destructuring
const myInfo = {
  house: 10,
  block: "D",
  road: "Lalmatia",
  area: "Mohammadpur",
  location: "Dhaka",
};

const { area, block, house, location } = myInfo;
console.log(area, block);

/**
 * Object:
 * - Variable names are fixed by the object property name
 * - Position can be independent
 */

// dot notation
console.log(myInfo.area);

// bracket notation
console.log(myInfo["road"]);

// bracket notation using variable
const myLocation = "location";
console.log(myInfo[myLocation]);

// Optional Chaining
// To prevent: Cannot read properties of undefined (reading 'code')
console.log(myInfo.area.postal?.code);
