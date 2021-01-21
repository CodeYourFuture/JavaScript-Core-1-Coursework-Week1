var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function spellName(myName) {
  return myName.toUpperCase();
}

function shoutGreeting(myName) {
  console.log("HELLO " + spellName(myName));
}

shoutGreeting(mentor1);
shoutGreeting(mentor2);
shoutGreeting(mentor3);
shoutGreeting(mentor4);
shoutGreeting(mentor5);
