const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Mimi";
const mentor4 = "Rob";
const mentor5 = "Yohannes";

function makeNameUpperCase(name) {
  return name.toUpperCase();
}

function shoutyGreeting(name) {
  return `HELLO ${makeNameUpperCase(name)}`;
}

function logShoutyGreeting(name) {
  return console.log(shoutyGreeting(name));
}

logShoutyGreeting(mentor1);
logShoutyGreeting(mentor2);
logShoutyGreeting(mentor3);
logShoutyGreeting(mentor4);
logShoutyGreeting(mentor5);
