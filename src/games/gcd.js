import run from '../game.js';
import { genRandomInteger, findGreatestDivisor } from '../utils.js';

const generateQuestionAnswer = () => {
  const firstNumber = genRandomInteger(99, 300);
  const secondNumber = genRandomInteger(3, 200);
  const questionGreatestDivisor = `${firstNumber} ${secondNumber}`;
  return {
    question: questionGreatestDivisor,
    answer: String(findGreatestDivisor(firstNumber, secondNumber)),
  };
};

const gameDescription = 'Find the greatest common divisor of given numbers.';
export default () => run(generateQuestionAnswer, gameDescription);
