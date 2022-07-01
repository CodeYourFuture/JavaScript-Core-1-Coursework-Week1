var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutyGreeting(greet) {

  return greet.toUpperCase();
}

function mentorNames(name, greet) {

  let greeting = shoutyGreeting(greet);
  let greetings = name.toUpperCase();
  let message = greetings + greeting;
  return message;

}

console.log(mentorNames("hello ", mentor1));
console.log(mentorNames("hello ", mentor2));
console.log(mentorNames("hello ", mentor3));
console.log(mentorNames("hello ", mentor4));
console.log(mentorNames("hello ", mentor5));