var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCaseName(name) {
  let upperCase = name.toUpperCase();
  return upperCase;
}
function shoutyGreeting(name) {
  let capitalName = upperCaseName(name);
  return "Hello " + capitalName;
}
//Hello Daniel
let greeting1 = shoutyGreeting(mentor1);
console.log(greeting1);

//Hello Irina
let greeting2 = shoutyGreeting(mentor2);
console.log(greeting2);

//Hello Mimi
let greeting3 = shoutyGreeting(mentor3);
console.log(greeting3);

//Hello Rob
let greeting4 = shoutyGreeting(mentor4);
console.log(greeting4);

//Hello Yohannes
let greeting5 = shoutyGreeting(mentor5);
console.log(greeting5);
