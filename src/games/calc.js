import run from '../game.js';
import { genRandomInteger, calculate } from '../utils.js';

const generateQuestionAnswer = () => {
  const firstNumber = genRandomInteger(3, 30);
  const secondNumber = genRandomInteger(2, 20);
  const signs = ['+', '-', '*'];
  const sign = signs[genRandomInteger(0, 2)];
  const questionCalc = `${firstNumber} ${sign} ${secondNumber}`;
     return { question: questionCalc,
       answer: String(calculate(firstNumber, secondNumber, sign)) };
};

const gameDescription = 'What is the result of the expression?';
export default () => run(generateQuestionAnswer, gameDescription);
