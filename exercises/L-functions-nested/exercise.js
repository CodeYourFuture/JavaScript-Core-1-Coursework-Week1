var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function logShoutyGreeting(name) {
  let uppercaseName = makeUppercase(name);

  return `HELLO ${uppercaseName}`;
}

function makeUppercase(mentor) {
  return mentor.toUpperCase();
}

console.log(logShoutyGreeting(mentor1));
console.log(logShoutyGreeting(mentor2));
console.log(logShoutyGreeting(mentor3));
console.log(logShoutyGreeting(mentor4));
console.log(logShoutyGreeting(mentor5));
