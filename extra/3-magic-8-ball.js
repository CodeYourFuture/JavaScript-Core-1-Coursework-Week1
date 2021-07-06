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



// and return the answer.
let answer =[
  {
    positivity: " It is certain.",
    type: " very positive"
  },
{
  
  positivity: " It is decidedly so.",
  type: " very positive"
},
{

  positivity: " Without a doubt.",
  type: " very positive"
},
{

   positivity: " Yes - definitely.",
  type: " very positive"
},
{

 positivity: " Yes - definitely.",
  type: " very positive"
},
{

   positivity: " you may rely on it ",
  type: " very positive"
},
{

   positivity: " As I see it, yes.",
  type: " positive"
},
{

   positivity: " Most likely.",
  type: " positive"
},
{

   positivity: " Outlook good.",
  type: "positive"
},
{

   positivity: " Yes.",
  type: " positive"
},
{


   positivity: " Sign point to yes.",
  type: " positive"
},
{

   negativity: "  Reply hazy, try again",
  type: " negative"
},
{

   negativity: " Ask again later.",
  type: " negative"
},
{

   negativity: " Better not tell you now.",
  type: " negative"
},
{

   negativity: " Cannot predict now.",
  type: " negative"
},
{
   negativity: " Concentrate and ask again.",
  type: " negative"
},
{

   negativity: " Don't count on it.",
  type: " very negative"
},
{

   negativity: "My reply is no.",
  type: " very negative"
},
{

   negativity: " My sources say no.",
  type: " very negative"
},
{

   negativity: " Outlook not so good.",
  type: " very negative"
},
{

  negativity: " Very doubtful .",
  type: " very negative"
},
]



  //Write your code in here
function shakeBall() {
  let randomAnswer = Math.floor(maths.random() * 20);
  // This should log "The ball has shaken!"
  console.log("The ball has shaken!")
  return answer[randomAnswer].positivity;
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
  let  checkAnswer= math.floor(math.randomAnswer() *20)
    if (randomAnswer === 20){
    console.log("it is certain")
    }else if (randomAnswer === 19){
    console.log('Reply hazy, try again')
    }else if (randomAnswer===18 ){
    console.log('It is decidedly so.')
    }else if (randomAnswer===17 ){
    console.log('Without a doubt.')
    }else if (randomAnswer===16 ){
    console.log('yes -Definitely.')
    }else if (randomAnswer===17 ){
    console.log('You may rely rely on it.')
    }else if (randomAnswer===15 ){
    console.log('Most likely.')
    }else if (randomAnswer===14 ){
    console.log('It is decidedly so.')
    }else if (randomAnswer===14 ){
    console.log('out look good.')
    }else if (randomAnswer===13 ){
    console.log('yes.')
    }else if (randomAnswer===12 ){
    console.log('Sign point to yes.')

    }else if (randomAnswer===0 ){
    console.log('very doubtful .')
    }else if (randomAnswer===11 ){
    console.log('Reply hazy, try later.')
 }
}
/* 
==================================
======= TESTS - DO NOT MODIFY =====

There are some Tests in this file that will help you work out if your code is working.

To run these tests type `npm run extraTo run the tests for just this one file, type `npm run extra-tests -- --testPathPattern 3-magic-8-ball` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
==================================
*/

test("whole magic 8 ball sequence", () => {
  const consoleLogSpy = jest.spyOn(global.console, "log");
  const answer = shakeBall();

  expect(typeof answer).toEqual("string");

  expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  expect(consoleLogSpy).toHaveBeenLastCalledWith("The ball has shaken!");

  expect(checkAnswer(answer)).toBeOneOf([
    "very positive",
    "positive",
    "negative",
    "very negative",
  ]);
});

test("magic 8 ball returns different values each time", () => {
  const seenAnswers = new Set();
  for (let i = 0; i < 10; ++i) {
    seenAnswers.add(shakeBall());
  }
  if (seenAnswers.size < 2) {
    throw Error(
      "Expected to get different random answers each time shakeBall was called, but always got the same one"
    );
  }

  let seenPositivities = new Set(Array.from(seenAnswers.values()).map(checkAnswer));
  if (seenPositivities.size < 2) {
    throw Error(
      "Expected to random answers with different positivities each time shakeBall was called, but always got the same one"
    );
  }
});

test("checkAnswer works for `It is decidedly so.`", () => {
  expect(checkAnswer("It is decidedly so.")).toEqual("very positive");
});

test("checkAnswer works for `My reply is no.`", () => {
  expect(checkAnswer("My reply is no.")).toEqual("very negative");
});
