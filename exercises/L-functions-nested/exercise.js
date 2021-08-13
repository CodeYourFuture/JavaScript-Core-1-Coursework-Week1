var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function transform(mentor) {
  return mentor.toUpperCase();
}

function shout(myName) {
  let newName = transform(myName);

  let message = ` HELLO ${newName}!`;

  return message;
}

// Daniel
console.log(shout(mentor1));
// Irina
console.log(shout(mentor2));
// Mimi
console.log(shout(mentor3));
// Rob
console.log(shout(mentor4));
// Yohannes
console.log(shout(mentor5));
