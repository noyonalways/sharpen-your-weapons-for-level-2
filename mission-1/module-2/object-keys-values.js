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
