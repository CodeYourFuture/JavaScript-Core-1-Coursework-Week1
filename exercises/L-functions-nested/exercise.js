/** @format */

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

//function converts name to Uppercase
function createUpperCase(name) {
	return name.toUpperCase();
}

//function generates a Shouty Message
function createGreeting(name) {
	return `HELLO ${createUpperCase(name)}`;
}

console.log(createGreeting(mentor1));
console.log(createGreeting(mentor2));
console.log(createGreeting(mentor3));
console.log(createGreeting(mentor4));
console.log(createGreeting(mentor5));
