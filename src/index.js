
import readlineSync from 'readline-sync';


const gameEngine = (gameDescription, task) => {
  console.log("Welcome to the Brain Games!");
  const currentName = () => readlineSync.question('May I have your name? ');
  const userName = currentName();
  console.log(`Hello, ${userName} !`);
  console.log(gameDescription);

  for (let i = 0; i < 3; i += 1) {
    const questionsAndAnswers = task();
    console.log(`Question: ${questionsAndAnswers[0]}`);
    const answerUser = readlineSync.question('Your answer: ');

    const correctAnswer = questionsAndAnswers[1];

    if (answerUser === correctAnswer) {
      console.log('Correct!');
    } else {
        const errorMessage = `'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}!`;
        console.log(errorMessage);
      return errorMessage;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;