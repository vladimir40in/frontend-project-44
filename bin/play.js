
import readlineSync from 'readline-sync';

console.log("Welcome to the Brain Games!");
const currentName = () => readlineSync.question('May I have your name? ');
const userName = currentName();

console.log(`Hello, ${userName} !`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
 
const isEven = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`)
    const answerUser = readlineSync.question('Your answer: ');
    const checkingYes = (randomNumber % 2 === 0) && (answerUser === 'yes');
    const checkingNo = (randomNumber % 2 !== 0) && (answerUser === 'no');

    if (checkingYes === true || checkingNo === true) {
      console.log('Correct!');
    } else {
        const opposite = (answerUser === 'yes' ? 'no' : 'yes');
        const errorMessage = `'${answerUser}' is wrong answer ;(. Correct answer was '${opposite}'. \n Let's try again, ${userName}!`;
        console.log(errorMessage);
      return errorMessage;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
isEven();

