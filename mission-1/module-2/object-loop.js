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
