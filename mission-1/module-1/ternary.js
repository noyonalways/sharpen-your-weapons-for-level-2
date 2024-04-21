const isLeader = true;
let price = 1100;

if (isLeader === true) {
  if (price > 1000) {
    price = price / 2;
  } else {
    price = 0;
  }
} else {
  price = price + 100;
}

// semi advanced ternary
price = isLeader === true ? (price > 1000 ? price / 2 : 0) : price + 100;

console.log(price);
