export const square = (a, b) => a * b;

export const genRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// min & max included

export const findGreatestDivisor = (firstNumber, secondNumber) => {

while (firstNumber !== secondNumber) {
  if (firstNumber > secondNumber) {
    firstNumber -= secondNumber;
  } else {
    secondNumber -= firstNumber;
  }
}
  return firstNumber;
};

