import run from '../game.js';
import { genRandomInteger } from '../utils.js';

const generateQuestionAnswer = () => {
  const startNumber = genRandomInteger(2, 100);
  const interval = genRandomInteger(4, 8);
  const progression = [];
  const length = 9;
  for (let j = 0; j < length; j += 1) {
    progression.push(startNumber + interval * j);
  }

  const missingPosition = genRandomInteger(1, 8);
  const missingNumber = progression[missingPosition];
  const forGameProgression = progression;
  forGameProgression[missingPosition] = '..';
  return { question: String(forGameProgression.join(' ')), answer: String(missingNumber) };
};

const gameDescription = 'What number is missing in the progression?';
export default () => run(generateQuestionAnswer, gameDescription);
