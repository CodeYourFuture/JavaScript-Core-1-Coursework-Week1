var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function CreateGreeting(name) {
  return `HELLO ${name}`;
}

function ToUpper(string) {
  return CreateGreeting(string.toUpperCase());
}

console.log(ToUpper(mentor1));
console.log(ToUpper(mentor2));
console.log(ToUpper(mentor3));
console.log(ToUpper(mentor4));
console.log(ToUpper(mentor5));

console.log("\n");
