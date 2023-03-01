import run from '../game.js';
import { genRandomInteger } from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (checkingNumber) => {
  for (let j = 2; j < checkingNumber; j += 1) {
    if (checkingNumber % j === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const generateQuestionAnswer = () => {
  const checkingNumber = genRandomInteger(3, 111);
  return{ question: checkingNumber, answer: isPrime(checkingNumber) };
}

export default () => {
  run(generateQuestionAnswer, gameDescription);
};
