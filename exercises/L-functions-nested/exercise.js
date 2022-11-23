var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCaseName(teacher) {
  return teacher.toUpperCase();
}

// function shoutyGreeting(name) {
//   console.log("HELLO " + name);
// }

// shoutyGreeting(mentor1);

function shoutyGreeting(name) {
  return "HELLO " + upperCaseName(name);
}

console.log(shoutyGreeting(mentor1));
console.log(shoutyGreeting(mentor2));
console.log(shoutyGreeting(mentor3));
console.log(shoutyGreeting(mentor4));
console.log(shoutyGreeting(mentor5));
