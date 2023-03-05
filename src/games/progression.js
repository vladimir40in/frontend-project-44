import run from '../game.js';
import { genRandomInteger, formProgression } from '../utils.js';

const generateQuestionAnswer = () => {
  const length = 9;
  const startNumber = genRandomInteger(2, 100);
  const interval = genRandomInteger(4, 8);
  const progression = formProgression(length, startNumber, interval);
  const missingPosition = genRandomInteger(1, 8);
  const missingNumber = progression[missingPosition];
  progression[missingPosition] = '..';
  return { question: String(progression.join(' ')), answer: String(missingNumber) };
};

const gameDescription = 'What number is missing in the progression?';
export default () => run(generateQuestionAnswer, gameDescription);
