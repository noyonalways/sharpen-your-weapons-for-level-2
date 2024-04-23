// function parameter
function doTheWork(name) {
  console.log(`${name} do the work.`);

  // the parameter is only available in this block
}

doTheWork("John Doe");

// square function
function doTheSquare(number) {
  const result = number * number;
  console.log(result);
}

doTheSquare(4);

// We can pass multiple arguments to the function
function addAll(a, b, c, d, e) {
  const total = a + b + c + d + e;
  console.log(total);
}

addAll(1, 2, 3, 4, 5);
