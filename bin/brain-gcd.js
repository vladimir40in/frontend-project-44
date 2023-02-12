#!/usr/bin/env node
import runGame from '../src/game.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

let arrGame = [];
for (let i = 0; i < 3; i += 1) {
    let firstNumber = Math.floor(Math.random() * 500);
    let secondNumber = Math.ceil(Math.random() * 200);
    const questionGreatestDivisor = `${firstNumber} ${secondNumber}`;
    let greatestDivisor;

        while (firstNumber !== secondNumber) {
        if (firstNumber > secondNumber) { 
        firstNumber = firstNumber - secondNumber;
            } else {
        secondNumber = secondNumber - firstNumber;
    }
 }
    greatestDivisor = firstNumber;
    arrGame.push({ question: questionGreatestDivisor, answer: String(greatestDivisor) }); 
};
  runGame(arrGame, gameDescription);