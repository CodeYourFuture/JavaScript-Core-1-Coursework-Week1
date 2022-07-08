var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

let mentor1 = "Daniel";
let mentor2 = "Irina";
let mentor3 = "Mimi";
let mentor4 = "Rob";
let mentor5 = "Yohannes";

function spellName(name) {
    return name.toUpperCase();
  }
function shoutyGreeting(name){
    let message = 'HELLO '+ spellName(name);
    return message
};
console.log(shoutyGreeting(mentor1));
console.log(shoutyGreeting(mentor2));
console.log(shoutyGreeting(mentor3));
console.log(shoutyGreeting(mentor4));
console.log(shoutyGreeting(mentor5));