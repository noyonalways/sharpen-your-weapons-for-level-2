// even
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(2));

// odd
function isOdd(number) {
  if (number % 2 === 1) {
    return true;
  }
  return false;
}

console.log(isOdd(20));
