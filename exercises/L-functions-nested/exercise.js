var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCase (name) {
    return name.toUpperCase();
}

function shoutGreeting(name) {
  let upperCaseName = upperCase(name);
  let upperCaseGreeting = `HELLO ${upperCaseName}`;
  return upperCaseGreeting;
}

var result1 = shoutGreeting(mentor1);
console.log(result1);

var result2 = shoutGreeting(mentor2);
console.log(result2);

var result3 = shoutGreeting(mentor3);
console.log(result3);

var result4 = shoutGreeting(mentor4);
console.log(result4);

var result5 = shoutGreeting(mentor5);
console.log(result5);