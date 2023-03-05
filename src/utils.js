export const square = (a, b) => a * b;

export const genRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// min & max included

export const findGreatestDivisor = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
};
