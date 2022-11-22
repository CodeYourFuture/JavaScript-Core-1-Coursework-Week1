var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function createCreeting(names) {
  let greet = "HELLO" + names.toUpperCase();
  return greet;
}

console.log(createCreeting("Daniel"));
console.log(createCreeting("Irina"));
console.log(createCreeting("Mimi"));
console.log(createCreeting("Rob"));
console.log(createCreeting("Yohannes"));
