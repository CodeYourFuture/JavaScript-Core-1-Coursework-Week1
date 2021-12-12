var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutyGreeting(greeting, name) {
  var nameUpperCase = name.toUpperCase();
  return greeting + nameUpperCase;
}

const mentorsGreeting = shoutyGreeting("HELLO ", mentor1);
const mentorsGreeting2 = shoutyGreeting("HELLO ", mentor2);
const mentorsGreeting3 = shoutyGreeting("HELLO ", mentor3);
const mentorsGreeting4 = shoutyGreeting("HELLO ", mentor4);
const mentorsGreeting5 = shoutyGreeting("HELLO ", mentor5);

console.log(mentorsGreeting);
console.log(mentorsGreeting2);
console.log(mentorsGreeting3);
console.log(mentorsGreeting4);
console.log(mentorsGreeting5);

