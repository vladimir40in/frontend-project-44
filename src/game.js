import readlineSync from 'readline-sync';

const runGame = (arrGame, gameDescription) => {
  console.log('Welcome to runGame!');
  const currentName = () => readlineSync.question('May I have your name? ');
  const userName = currentName();
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${arrGame[i].question}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (arrGame[i].answer === answerUser) {
      console.log('Correct!');
    } else {
      const errorMessage = `'${answerUser}' is wrong answer ;(. Correct answer was '${arrGame[i].answer}'. \n Let's try again, ${userName}!`;
      console.log(errorMessage);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
