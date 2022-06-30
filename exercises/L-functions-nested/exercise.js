var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function makeUpper(word) {
  return word.toUpperCase();
}

function greetAll(person1, person2, person3, person4, person5) {
  console.log(makeUpper("Howzit "), makeUpper(person1));
  console.log(makeUpper("Howzit "), makeUpper(person2));
  console.log(makeUpper("Howzit "), makeUpper(person3));
  console.log(makeUpper("Howzit "), makeUpper(person4));
  console.log(makeUpper("Howzit"), makeUpper(person5));
}

greetAll(mentor1, mentor2, mentor3, mentor4, mentor5);
