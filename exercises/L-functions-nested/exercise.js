var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function createAShoutyMessage(message) {
	return (message.toUpperCase());
}

function shoutName(name) {
	return (name.toUpperCase());
}

greeting = "Finally you're here! Come on in, ";

function createAShoutyMessageWithName(message, name) {
	return (createAShoutyMessage(message) + shoutName(name));
}

console.log(createAShoutyMessageWithName(greeting, mentor1));
console.log(createAShoutyMessageWithName(greeting, mentor2));
console.log(createAShoutyMessageWithName(greeting, mentor3));
console.log(createAShoutyMessageWithName(greeting, mentor4));
console.log(createAShoutyMessageWithName(greeting, mentor5));