var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function nameuppercase(lowercasename) {
  return lowercasename.toUpperCase();
}

function shoutprint(mentorname) {
  return "HELLO " + nameuppercase(mentorname) + "!";
}
console.log(shoutprint(mentor1));
console.log(shoutprint(mentor2));
console.log(shoutprint(mentor3));
console.log(shoutprint(mentor4));
console.log(shoutprint(mentor5));
