import run from '../game.js';
import { genRandomInteger } from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const GAMES_COUNT = 3;
const arrGame = [];
for (let i = 0; i < GAMES_COUNT; i += 1) {
  const firstNumber = genRandomInteger(3, 30);
  const secondNumber = genRandomInteger(2, 20);
  const signs = ['+', '-', '*'];
  const sign = signs[genRandomInteger(0, 2)];
  const questionCalc = `${firstNumber} ${sign} ${secondNumber}`;

  let resultCalc;
  switch (sign) {
    case '+':
      resultCalc = firstNumber + secondNumber;
      break;
    case '-':
      resultCalc = firstNumber - secondNumber;
      break;
    case '*':
      resultCalc = firstNumber * secondNumber;
      break;
    default:
      resultCalc = null;
  }
  arrGame.push({ question: questionCalc, answer: String(resultCalc) });
}

export default () => {
  run(arrGame, gameDescription);
};
