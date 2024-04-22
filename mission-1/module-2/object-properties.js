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
