var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


let capL = function capitalLetter(name) {
  //let pName = this.name;
  return name.toUpperCase();
}

function greeting(name) {
  let shout = capL(name);
  return ` HELLO ${shout}`
  //return ` HELLO MY NAME IS ${capL(name)}`
}

console.log(greeting(mentor1));
console.log(greeting(mentor2));
console.log(greeting(mentor3));
console.log(greeting(mentor4));
console.log(greeting(mentor5));
