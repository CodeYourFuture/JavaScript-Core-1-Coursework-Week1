/**

  Let's peer into the future using a Magic 8 Ball!
  https://en.wikipedia.org/wiki/Magic_8-Ball 

  There are a few steps to being able view the future though:
  * Ask a question
  * Shake the ball
  * Get an answer
  * Decide if it's positive or negative

  The question can be anything, but the answers are fixed,
  and have different levels of positivity or negativity.

  Below are the possible answers:

  ## Very positive
    It is certain.
    It is decidedly so.
    Without a doubt.
    Yes - definitely.
    You may rely on it.

  ## Positive
    As I see it, yes.
    Most likely.
    Outlook good.
    Yes.
    Signs point to yes.

  ## Negative
    Reply hazy, try again.
    Ask again later.
    Better not tell you now.
    Cannot predict now.
    Concentrate and ask again.

  ## Very negative
    Don't count on it.
    My reply is no.
    My sources say no.
    Outlook not so good.
    Very doubtful.
*/

// This should log "The ball has shaken!"
// and return the answer.
function shakeBall() {
  //Write your code in here

  const possibleAnswers = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes - definitely.',
    'You may rely on it.',

    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',

    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',

    "Don't count on it.",
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
  ];

  console.log('The ball has shaken!');

  const possibleAnswerIndex = Math.floor(Math.random() * 20);

  return possibleAnswers[possibleAnswerIndex];
}

/* 
  This function should say whether the answer it is given is
    - very positive
    - positive
    - negative
    - very negative

  This function should expect to be called with any value which was returned by the shakeBall function.
*/
function checkAnswer(answer) {
  //Write your code in here

  const possibleAnswers = [
    {
      veryPositive: [
        'It is certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes - definitely.',
        'You may rely on it.'
      ],
      positive: [
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Yes.',
        'Signs point to yes.'
      ],

      negative: [
        'Reply hazy, try again.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.'
      ],

      veryNegative: [
        "Don't count on it.",
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.'
      ]
    }
  ];

  let status = '';
  possibleAnswers.forEach((array) => {
    if (array.veryPositive.includes(answer)) {
      status = 'very positive';
    }

    if (array.positive.includes(answer)) {
      status = 'positive';
    }

    if (array.negative.includes(answer)) {
      status = 'negative';
    }

    if (array.veryNegative.includes(answer)) {
      status = 'very negative';
    }
  });
  return status;
}

/* 
==================================
======= TESTS - DO NOT MODIFY =====

There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 3-magic-8-ball.js` into your terminal
==================================
*/

const log = console.log;
let logged;
console.log = function () {
  log(...arguments);
  logged = arguments[0];
};

function test(test_name, expr) {
  let status;
  if (expr) {
    status = 'PASSED';
  } else {
    status = 'FAILED';
  }

  logged = undefined;
  console.log(`${test_name}: ${status}`);
}

const validAnswers = [];
function testAll() {
  const answer = shakeBall();
  test(`shakeBall logs "The ball has shaken!"`, logged === 'The ball has shaken!');
  test(`shakeBall returns an string answer`, typeof answer === 'string');

  test(
    `checkAnswer("It is decidedly so.") returns "very positive`,
    checkAnswer('It is decidedly so.') === 'very positive'
  );

  test(
    `checkAnswer("My reply is no.") returns "very negative`,
    checkAnswer('My reply is no.') === 'very negative'
  );

  test(
    `checkAnswer returns the level of positivity"`,
    ['very positive', 'positive', 'negative', 'very negative'].includes(checkAnswer(answer))
  );
  const answers = new Set();
  for (let i = 0; i < 10; ++i) {
    answers.add(shakeBall());
  }
  test(`shakeBall returns different answers`, answers.size > 1);
  test(
    `checkAnswer returns different answers`,
    new Set(Array.from(answers.values()).map(checkAnswer)).size > 1
  );
}

testAll();
