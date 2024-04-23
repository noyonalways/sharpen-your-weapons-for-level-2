const greetMessage = (name) => {
  // console.log("Hello " + name + "the Next Level Developer");
  console.log(`Hello ${name} the Next Level Developer.`); // template literals
};

// default export
export default greetMessage;

// named export
export const welcomeMessage = (name) => {
  console.log(`Welcome ${name} to this journey.`);
};
