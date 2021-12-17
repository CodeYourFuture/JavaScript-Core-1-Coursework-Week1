

let mentor1 = "Daniel";
let mentor2 = "Irina";
let mentor3 = "Mimi";
let mentor4 = "Rob";
let mentor5 = "Yohannes";

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