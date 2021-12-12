var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function names (b) {
    return b.toUpperCase();
}

function message (b) {
    var name = names(b);
    return "HELLO " + name;
}

console.log(message(mentor1));
console.log(message(mentor2));
console.log(message(mentor3));
console.log(message(mentor4));
console.log(message(mentor5));