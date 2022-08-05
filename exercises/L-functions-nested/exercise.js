var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function ChangToUpperCase(mentor) {
    return mentor.toUpperCase();
}


function ShoutGreeting(mentor) {
    return `HELLO ${ChangToUpperCase(mentor)}`;
}

console.log(ShoutGreeting(mentor1));
console.log(ShoutGreeting(mentor2));
console.log(ShoutGreeting(mentor3));
console.log(ShoutGreeting(mentor4));
console.log(ShoutGreeting(mentor5));






