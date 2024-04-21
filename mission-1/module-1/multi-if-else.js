/**
 * ===== Multi level if-else if-else condition =====
 */

const price = 3000;

if (price > 5000) {
  // 10% discount
  const discount = (price * 10) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else if (price > 2500) {
  // 5% discount
  const discount = (price * 5) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}

// BMI (Body Mass Index) Calculator
const height = 64; // inches
const weight = 50; // kilograms

const underWeight = 18.4;
const normal = 24.9;
const overWeight = 39.9;
const obese = 40;

const heightInMeter = height * 0.0254; // convert to meters
const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);

if (bmi <= underWeight) {
  console.log(`BMI: ${bmi} Under weight`);
} else if (bmi > underWeight && bmi <= normal) {
  console.log(`BMI: ${bmi} Normal weight`);
} else if (bmi > normal && bmi <= overWeight) {
  console.log(`BMI: ${bmi} Over weight`);
} else if (bmi >= obese) {
  console.log(`BMI: ${bmi} Obese weight`);
}
