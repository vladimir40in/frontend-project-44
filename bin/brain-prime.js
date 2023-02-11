#!/usr/bin/env node
  import runGame from '../src/game.js';
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrime = (checkingNumber) => {
  
     for (let j = '2'; j < checkingNumber; j ++) { 
       if (checkingNumber % j === 0) {
        return 'no';
       }
     }
        return 'yes';
   };
     var arrGame = [];
      for (let i = 0; i < 3; i += 1) {
const checkingNumber = Math.floor(Math.random() * 100);

   arrGame.push({question: checkingNumber, answer: isPrime(checkingNumber)}); 
};
   runGame(arrGame, gameDescription);
