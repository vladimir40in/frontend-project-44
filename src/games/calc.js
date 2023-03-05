import run from '../game.js';
import { genRandomInteger } from '../utils.js';

const generateQuestionAnswer = () => {
  const firstNumber = genRandomInteger(3, 30);
  const secondNumber = genRandomInteger(2, 20);
  const signs = ['+', '-', '*'];
  const sign = signs[genRandomInteger(0, 2)];
  let resultCalc;
  switch (firstNumber, secondNumber, sign) {
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
  };
        
  const questionCalc = `${firstNumber} ${sign} ${secondNumber}`;
    return { question: questionCalc, answer: String(resultCalc) };
};
const gameDescription = 'What is the result of the expression?';
export default () => run(generateQuestionAnswer, gameDescription);
