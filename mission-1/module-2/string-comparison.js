// Uppercase: ABCD EFG
// Lowercase: abcd efg

// convert to lowercase
const school = "Ranigonj High School";
school.toLowerCase();
console.log(school);

// convert to uppercase
school.toUpperCase();
console.log(school);

// to remove white space from the whole string
const drink = "Water";
const liquid = "Water  ";

drink === liquid; // false
drink.trim() === liquid.trim(); // true

// trimStart() -> remove white spade from start
// trimEnd() -> remove white space from end
