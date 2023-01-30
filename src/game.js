
import readlineSync from 'readline-sync';

const runGame = (arrGame, gameDescription) => {
  console.log("Welcome to runGame!");
  const currentName = () => readlineSync.question('May I have your name? ');
  const userName = currentName();
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);


for (let i = 0; i < 3; i += 1) {
  const questionAndAnswer = arrGame;
    console.log(`Question: ${arrGame[i].question}`)

    const answerUser = readlineSync.question('Your answer: ');
  
    if (arrGame[i].answer === answerUser) {
      console.log('Correct!');
    } else {
      const opposite = (answerUser === 'yes' ? 'no' : 'yes');
      const errorMessage = `'${answerUser}' is wrong answer ;(. Correct answer was '${opposite}'. \n Let's try again, ${userName}!`;
      console.log(errorMessage);
    break;
   }
  }
console.log(`Congratulations, ${userName}!`);
};

export default runGame;