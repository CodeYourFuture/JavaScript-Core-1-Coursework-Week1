var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function changeToUppercase(name) {
  return (upperCasename = name.toUpperCase());
}
function shoutyGreeting(upperCasename) {
  return "HELLO " + upperCasename;
}
console.log(shoutyGreeting(changeToUppercase(mentor1)));
console.log(shoutyGreeting(changeToUppercase(mentor2)));
console.log(shoutyGreeting(changeToUppercase(mentor3)));
console.log(shoutyGreeting(changeToUppercase(mentor4)));
console.log(shoutyGreeting(changeToUppercase(mentor5)));
