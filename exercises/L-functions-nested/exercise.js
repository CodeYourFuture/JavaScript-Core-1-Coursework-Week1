var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Ken";
var mentor5 = "Yohannes";

function shout() {
    return "HELLO ";
};    

function shoutyGreeting(greeting, name) {
    return greeting + name.toUpperCase();


}

console.log(shoutyGreeting(shout(),mentor1));
console.log(shoutyGreeting(shout(),mentor2));
console.log(shoutyGreeting(shout(),mentor3));
console.log(shoutyGreeting(shout(),mentor4));
console.log(shoutyGreeting(shout(),mentor5));
