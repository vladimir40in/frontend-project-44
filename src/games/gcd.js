import run from '../game.js';
import { genRandomInteger } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const GAMES_COUNT = 3;
const arrGame = [];
for (let i = 0; i < GAMES_COUNT; i += 1) {
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
  arrGame.push({ question: questionGreatestDivisor, answer: String(firstNumber) });
}

export default () => {
  run(arrGame, gameDescription);
};
