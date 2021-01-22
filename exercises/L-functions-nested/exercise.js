var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function uppercaseName(mentorName) {
  return mentorName.toUpperCase();
}

function greetingMaker(mentorName) {
  let greeting = "HELLO " + uppercaseName(mentorName);
  return greeting;
}

console.log(greetingMaker(mentor1));
console.log(greetingMaker(mentor2));
console.log(greetingMaker(mentor3));
console.log(greetingMaker(mentor4));
console.log(greetingMaker(mentor5));
