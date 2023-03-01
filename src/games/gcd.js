import run from '../game.js';
import { genRandomInteger } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const generateQuestionAnswer = () => {
  let firstNumber = genRandomInteger(99, 300);
  let secondNumber = genRandomInteger(3, 200);
  const questionGreatestDivisor = `${firstNumber} ${secondNumber}`;
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  return { question: questionGreatestDivisor, answer: String(firstNumber) };
};

export default () => {
  run(generateQuestionAnswer, gameDescription);
};
