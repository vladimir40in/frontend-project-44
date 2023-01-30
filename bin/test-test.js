

import readlineSync from 'readline-sync';

console.log("Welcome to runGame!");
const currentName = () => readlineSync.question('May I have your name? ');
const userName = currentName();

console.log(`Hello, ${userName} !`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const runGame = [
      {question: 3, answer: 'no'},
      {question: 6, answer: 'yes'},
      {question: 1, answer: 'no'},
    ]
    console.log(`Question: ${runGame[i].question}`)
    const answerUser = readlineSync.question('Your answer: ');
  
    if (runGame[i].answer === answerUser) {
      console.log('Correct!');
    } else {
      const opposite = (answerUser === 'yes' ? 'no' : 'yes');
      const errorMessage = `'${answerUser}' is wrong answer ;(. Correct answer was '${opposite}'. \n Let's try again, ${userName}!`;
      console.log(errorMessage);
    break;
  }
};
console.log(`Congratulations, ${userName}!`);