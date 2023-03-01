import run from '../game.js';
import { genRandomInteger } from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';
const generateQuestionAnswer = () => {
  const randomNumber = genRandomInteger(3, 111);
  const isEven = randomNumber % 2 === 0 ? 'yes' : 'no';
  return { question: randomNumber, answer: isEven };
    }

export default () => {
  run(generateQuestionAnswer, gameDescription);
};
