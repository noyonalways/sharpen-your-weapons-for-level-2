/**
 * For a given string tell me whether is has even number of characters or not
 */

function evenSizedString(str) {
  const size = str.length;
  console.log(str, size);

  if (size % 2 === 0) {
    console.log("even size", size);
  } else {
    console.log("odd size", size);
  }
}

function doubleOrTriple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

console.log(doubleOrTriple(4, true));
console.log(doubleOrTriple(4, false));

function numberOfElements(numbers) {
  const len = numbers.length;
  return len;
}

console.log(numberOfElements([1, 2, 3, 4, 5]));
