var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function createUppercaseNames(string) {
  return string.toUpperCase();
}

function createShoutyGreeting(name) {
  let mentorName = createUppercaseNames(name);
  let message = "HELLO " + mentorName;
  return message;
}

console.log(createShoutyGreeting(mentor1));
console.log(createShoutyGreeting(mentor2));
console.log(createShoutyGreeting(mentor3));
console.log(createShoutyGreeting(mentor4));
console.log(createShoutyGreeting(mentor5));
