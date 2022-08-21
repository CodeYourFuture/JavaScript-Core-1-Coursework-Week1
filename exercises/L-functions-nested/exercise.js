var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCase(name) {
  return name.toUpperCase();
}
function shoutyGreeting() {
  let name = upperCase(mentor1);
  return "HELLO " + name;
}

console.log(shoutyGreeting());
