export const genRandomInteger = (min, max) => {
  min = Math.ceil(min); // min & max included
  max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  };
