var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function uppercase (name) {
    return name.toUpperCase();
}

function greetings (name) {
    var getUpperCase = uppercase(name);
    var returnString = "Hello " + getUpperCase;
    return returnString;
}   

console.log(greetings(mentor1));
console.log(greetings(mentor2));
console.log(greetings(mentor3));
console.log(greetings(mentor4));
console.log(greetings(mentor5));