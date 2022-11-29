var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shutyGreeting(mentor) {
    var name = upperCase(mentor);
    return `Hello ${name}`;
}

function upperCase(mentor) {
    return mentor.toUpperCase();
}

console.log(shutyGreeting(mentor1));
console.log(shutyGreeting(mentor2));
console.log(shutyGreeting(mentor3));
console.log(shutyGreeting(mentor4));
console.log(shutyGreeting(mentor5));