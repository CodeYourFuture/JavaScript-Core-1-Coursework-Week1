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
const answer_very_positive = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.']
  const answer_positive = ['As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.']
  const answer_negetive = ['Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.']
  const answer_very_negetive = ['Don\'t count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.']
  
  var allPossibleAnswers = answer_very_positive
  .concat(answer_very_positive)
  .concat(answer_positive)
  .concat(answer_negetive)
  .concat(answer_very_negetive)
 
  
//   This should log "The ball has shaken!"
//   and return the answer.

    let myAnswer = allPossibleAnswers[Math.ceil((Math.random(0)* allPossibleAnswers.length))]
  
  function shakeBall(answer) {
    console.log("The ball has shaken!")
    return answer
  }

 

  function checkAnswer(myAnswer) {
    if (answer_very_positive.includes(shakeBall(myAnswer))) {
        return "very positive"
    } else if (answer_positive.includes(shakeBall(myAnswer))) {
        return "positive"
    } else if (answer_negetive.includes(shakeBall(myAnswer))) {
        return "negetive"
    } else if (answer_very_negetive.includes(shakeBall(myAnswer))) {
        return "very negetive"
    }
  
  }
  checkAnswer(myAnswer)
