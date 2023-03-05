export const square = (a, b) => a * b;

export const genRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// min & max included

export const formProgression = (length, startNumber, interval) => {
  const result = [];
  for (let j = 0; j < length; j += 1) {
    result.push(startNumber + interval * j);
  }
  return result;
};

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

export const calculate = (a, b, s) => {
  let resultCalc;
  switch (s) {
    case '+':
      resultCalc = a + b;
      break;
    case '-':
      resultCalc = a - b;
      break;
    case '*':
      resultCalc = a * b;
      break;
    default:
      resultCalc = null;
  }
  return resultCalc;
};
