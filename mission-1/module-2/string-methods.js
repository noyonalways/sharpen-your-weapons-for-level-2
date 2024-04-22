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
