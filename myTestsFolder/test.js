let veryPositive = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it."]

let positive = [
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes."]

let negative = [
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again."]

let veryNegative = [
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."]

let allAnswers = veryPositive.concat(positive, negative, veryNegative);

  function shakeBall() {
  //Write your code in here  
  let randomIndex = Math.floor(Math.random() * allAnswers.length);
  let randomAnswer = allAnswers[randomIndex];
  let message = "The ball has shaken!" 
  console.log(message);
  console.log(randomAnswer); 
  }  

function checkAnswer(answer) {
  if (veryPositive.includes(answer)) {
    return "very positive";
  } else if (positive.includes(answer)) {
    return "positive";
  } else if (negative.includes(answer)) {
    return "negative";
  } else if (veryNegative.includes(answer)) {
    return "very negative";
  }
}




console.log(checkAnswer("Yes."))
console.log(checkAnswer("It is certain."))
console.log(checkAnswer("Ask again later."))
console.log(checkAnswer("My reply is no."))