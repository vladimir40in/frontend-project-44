import run from '../game.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const arrGame = [];
for (let i = 0; i < 3; i += 1) {
  let firstNumber = Math.floor(Math.random() * 500);
  let secondNumber = Math.ceil(Math.random() * 200);
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