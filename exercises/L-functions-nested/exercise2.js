var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

//function that spells their name in uppercase

function makeUpper(mentor) {
  return mentor.toUpperCase();
}

//function that creates a shouty greeting.

function greetMentor(mentor) {
  console.log("Hey! Hey! " + makeUpper(mentor));
}

greetMentor(mentor1);
greetMentor(mentor2);
greetMentor(mentor3);
greetMentor(mentor4);
greetMentor(mentor5);
