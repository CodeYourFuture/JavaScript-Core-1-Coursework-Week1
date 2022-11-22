var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function mentorUpperCase(a) {
  return a.toUpperCase();
}

function shoutyGreeting(a) {
  let nameUpperCase = mentorUpperCase(a);
  return "HELLO".concat(" ", nameUpperCase);
}

console.log(shoutyGreeting(mentor1));
console.log(shoutyGreeting(mentor2));
console.log(shoutyGreeting(mentor3));
console.log(shoutyGreeting(mentor4));
console.log(shoutyGreeting(mentor5));
