var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function createNamesToUpperCase(name) {
    return name.toUpperCase();

}

function startGreeting(name) {
    return `Hello ${createNamesToUpperCase (name)}`;
}

console.log(startGreeting(mentor1));
console.log(startGreeting(mentor2));
console.log(startGreeting(mentor3));
console.log(startGreeting(mentor4));
console.log(startGreeting(mentor5));