const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Mimi";
const mentor4 = "Rob";
const mentor5 = "Yohannes";

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


