var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

//function to spelling name in uppercase

function greeting(message) {
  return message.toUpperCase();
}
var greet_message = greeting("hello");

function getMentorName(name) {
  return name.toUpperCase();
}

var mentor1 = getMentorName("Daniel");
console.log(greet_message + " " + mentor1);
var mentor2 = getMentorName("Irina");
console.log(greet_message + " " + mentor2);
var mentor3 = getMentorName("Mimi");
console.log(greet_message + " " + mentor3);
var mentor4 = getMentorName("Rob");
console.log(greet_message + " " + mentor4);
var mentor5 = getMentorName("Yohannes");
console.log(greet_message + " " + mentor5);