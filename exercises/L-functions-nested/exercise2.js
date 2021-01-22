var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function upperCase(name) {
  return name.toUpperCase();
}
function createGreeting(name) {
  var upName = upperCase(name);
  var message = "HELLO " + upName;
  return message;
}
var message = createGreeting(mentor1);
console.log(message);
message = createGreeting(mentor2);
  console.log(message);
message = createGreeting(mentor3);
  console.log(message);
message = createGreeting(mentor4);
  console.log(message);
message = createGreeting(mentor5);
console.log(message);
