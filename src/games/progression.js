import run from '../game.js';
import { genRandomInteger } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
const generateQuestionAnswer = () => {
  const startNumber = genRandomInteger(2, 100);
  const interval = genRandomInteger(4, 8);
  const progression = [];
  for (let j = 0; progression.length < 9; j += interval) {
    progression.push(startNumber + j);
  }
  const missingPosition = genRandomInteger(1, 8);
  const missingNumber = progression[missingPosition];
  const forGameProgression = progression;
  forGameProgression[missingPosition] = '..';
  return { question: String(forGameProgression.join(' ')), answer: String(missingNumber) };
};

export default () => {
  run(generateQuestionAnswer, gameDescription);
};
