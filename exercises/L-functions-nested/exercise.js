var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function upperCase(name1){
  return name1.toUpperCase();
}

function greeting(name1){
  return "HELLO "+ upperCase(name1);
}
console.log(greeting("daniel"));
console.log(greeting("Irina"));
console.log(greeting("Mimi"));
console.log(greeting("Rob"));
console.log(greeting("Yohannes"));