import run from '../game.js';
import { genRandomInteger } from '../utils.js';

const generateQuestionAnswer = () => {
  const randomNumber = genRandomInteger(3, 111); // min & max numbers
  const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
  
  return { question: randomNumber, answer: isEven };
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';
export default () => run(generateQuestionAnswer, gameDescription);