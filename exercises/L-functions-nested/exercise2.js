

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCaseName(name) {
    return (name = name.toUpperCase());
}

function loudGreeting(name) {
    return "hello ".toUpperCase() + upperCaseName(name);
}

console.log(loudGreeting(mentor1));
console.log(loudGreeting(mentor2));
console.log(loudGreeting(mentor3));
console.log(loudGreeting(mentor4));
console.log(loudGreeting(mentor5));
