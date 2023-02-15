import run from '../game.js';

const GAMES_COUNT = 3;
const gameDescription = 'What number is missing in the progression?';
const arrGame = [];
for (let i = 0; i < GAMES_COUNT; i += 1) {
  const startNumber = Math.floor(Math.random() * 20);
  const interval = Math.floor(Math.random() * 5 + 2);
  const progression = [];
  for (let j = 0; progression.length < 9; j += interval) {
    progression.push(startNumber + j);
  }
  const missingPosition = Math.floor(Math.random() * 8);
  const missingNumber = progression[missingPosition];
  const forGameProgression = progression;
  forGameProgression[missingPosition] = '..';
  arrGame.push({ question: String(forGameProgression.join(' ')), answer: String(missingNumber) });
}

export default () => {
  run(arrGame, gameDescription);
};