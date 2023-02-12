#!/usr/bin/env node
import runGame from '../src/game.js';

const gameDescription = 'What is the result of the expression?';

const arrGame = [];
for (let i = 0; i < 3; i += 1) {
  const firstNumber = Math.floor(Math.random() * 20);
  const secondNumber = Math.floor(Math.random() * 20);
  const signs = ['+', '-', '*'];
  const sign = signs[Math.floor(Math.random() * (signs.length))];
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
runGame(arrGame, gameDescription);
