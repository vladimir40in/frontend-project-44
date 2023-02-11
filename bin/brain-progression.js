#!/usr/bin/env node
import runGame from '../src/game.js';
const gameDescription = 'What number is missing in the progression?';

var arrGame = [];
for (let i = 0; i < 3; i += 1) {
 
  const startNumber = Math.floor(Math.random() * 20);
  const interval = Math.floor(Math.random() * 5 + 2);
  const progression = [];
    for (let i = 0; progression.length < 9; i += interval) {
    progression.push(startNumber + i);
  };
    const missingPosition = Math.floor(Math.random() * 8);
    const missingNumber = progression[missingPosition];
    const forGameProgression = progression;
    forGameProgression[missingPosition] = '..';

arrGame.push({question: String(forGameProgression.join(' ')), answer: String(missingNumber)}); 
};
runGame(arrGame, gameDescription);