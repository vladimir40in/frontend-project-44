export const square = (a, b) => a * b;

export const genRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// min & max included

export const findGreatestDivisor = (num1, num2) => {

  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
};
