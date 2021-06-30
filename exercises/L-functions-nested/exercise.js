function toUpper(name) {
    return name.toUpperCase();
}

function greetingMentor(name) {
    var result = toUpper(name);
    return "HELLO " + result;
}

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
console.log(greetingMentor(mentor1));
console.log(greetingMentor(mentor2));
console.log(greetingMentor(mentor3));
console.log(greetingMentor(mentor4));

console.log(greetingMentor(mentor5));