var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shouty(mentor) {
  var upperCaseMentor = mentor.toUpperCase();
  return `HELLO ${upperCaseMentor}`;
}

var shoutyGreeting = shouty(mentor1);
console.log(shoutyGreeting);

var shoutyGreeting = shouty(mentor2);
console.log(shoutyGreeting);

var shoutyGreeting = shouty(mentor3);
console.log(shoutyGreeting);

var shoutyGreeting = shouty(mentor4);
console.log(shoutyGreeting);

var shoutyGreeting = shouty(mentor5);
console.log(shoutyGreeting);
