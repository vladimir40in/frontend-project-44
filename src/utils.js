export const genRandomInteger = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
};// min & max included

export const square = (a, b) => {
  return a * b;
};