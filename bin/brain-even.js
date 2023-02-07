import runGame from '../src/game.js';
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

var arrGame = [];
for (let i = 0; i < 3; i += 1) {
  const randomNumber = Math.floor(Math.random() * 100);
  arrGame.push({question: randomNumber, answer: randomNumber % 2 === 0 ? 'yes' : 'no'}); 
};

runGame(arrGame, gameDescription);
