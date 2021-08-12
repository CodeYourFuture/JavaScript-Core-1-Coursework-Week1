var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCase(name){
    return name.toUpperCase();
}

function shoutyGreeting(name) {
    var greeting = upperCase(name);
    return "HELLO " + greeting;
}

var message1 = shoutyGreeting(mentor1);
console.log(message1);

var message2 = shoutyGreeting(mentor2);
console.log(message2);

var message3 = shoutyGreeting(mentor3);
console.log(message3);

var message4 = shoutyGreeting(mentor4);
console.log(message4);

var message5 = shoutyGreeting(mentor5);
console.log(message5);