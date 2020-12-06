// function to convert a word to uppercase
function toUpper(word) {
  return word.toUpperCase();
}

// function to create the greeting
function createShoutyGreeting(name) {
  var greeting = `HELLO ${toUpper(name)}`;
  return greeting;
}

// variable initialization
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

// print the results
console.log(createShoutyGreeting(mentor1));
console.log(createShoutyGreeting(mentor2));
console.log(createShoutyGreeting(mentor3));
console.log(createShoutyGreeting(mentor4));
console.log(createShoutyGreeting(mentor5));