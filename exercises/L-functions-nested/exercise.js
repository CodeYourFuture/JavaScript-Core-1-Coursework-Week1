var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

// ```js
// var name = "Daniel";
// var nameLowerCase = name.toLowerCase();

// console.log(nameLowerCase); // "daniel"
// ```;

function nameUpperCase(name) {
  return name.toUpperCase();
}

function shoutyGreeting(name) {
  let upperCaseName = nameUpperCase(name);
  return `HELLO ${upperCaseName}`;
}

console.log(shoutyGreeting(mentor1));
console.log(shoutyGreeting(mentor2));
console.log(shoutyGreeting(mentor3));
console.log(shoutyGreeting(mentor4));
console.log(shoutyGreeting(mentor5));
