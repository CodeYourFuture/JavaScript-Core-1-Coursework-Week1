var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperSpell(mentor) {
  return mentor.toUpperCase();
}

function shoutyGreeting(mentor) {
  let upperName = upperSpell(mentor);
  let message = "HELLO " + upperName;
  return message;
}
console.log(`${shoutyGreeting(mentor1)}
${shoutyGreeting(mentor2)}
${shoutyGreeting(mentor3)}
${shoutyGreeting(mentor5)}`);
