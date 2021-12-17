var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upName(name) {
  return name.toUpperCase();
}

function greeting(name) {
  let upperName = upName(name);
  let message = "HELLO " + upperName;
  return message;
  
}

console.log(greeting("Daniel"));
console.log(greeting("Irina"));
console.log(greeting("Mimi"));
console.log(greeting("Rob"));
console.log(greeting("Yohannes"));