let randomAnswer = 0;
let answerType = 0;

let veryPositiveAnswers = [
    `It is certain.`,
    `It is decidedly so.`,
    `Without a doubt.`,
    `Yes - definitely.`,
    `You may rely on it.`
]

let positiveAnswers = [
    `As I see it, yes.`,
    `Most likely.`,
    `Outlook good.`,
    `Yes.`,
    `Signs point to yes.`
]

let negativeAnswers = [
    `Reply hazy, try again.`,
    `Ask again later.`,
    `Better not tell you now.`,
    `Cannot predict now.`,
    `Concentrate and ask again.`
]

let veryNegativeAnswers = [
    `Don't count on it.`,
    `My reply is no.`,
    `My sources say no.`,
    `Outlook not so good.`,
    `Very doubtful.`
]

let allAnswers = veryPositiveAnswers.concat(positiveAnswers, negativeAnswers, veryNegativeAnswers);

// This should log "The ball has shaken!"
// and return the answer.
function shakeBall() {
  console.log(`The ball has shaken!`)
  randomAnswer = allAnswers[Math.floor(Math.random() * allAnswers.length)]
  console.log(randomAnswer);
}

shakeBall();

/* 
  This function should say whether the answer it is given is
    - very positive
    - positive
    - negative
    - very negative

  This function should expect to be called with any value which was returned by the shakeBall function.
*/
function checkAnswer(answer) {
  if (veryPositiveAnswers.includes(answer)) {
    console.log(`Very Positive.`);
  } else if (positiveAnswers.includes(answer)) {
    console.log(`Positive.`);
  } else if (negativeAnswers.includes(answer)) {
    console.log(`Negative.`);
  } else if (veryNegativeAnswers.includes(answer)) {
    console.log(`Very Negative.`);
  }
}