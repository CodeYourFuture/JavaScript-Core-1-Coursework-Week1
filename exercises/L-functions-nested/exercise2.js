var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

// Function to change style of text to uppercase
function changeToUpperCase(text) {
    return text.toUpperCase();
}

// Function to display greeting message, given name of a person to greet
function greetSomeone(name) {
    var greeting = "Hello " + name;
    var message = changeToUpperCase(greeting);
    console.log(message);
}

greetSomeone(mentor1);
greetSomeone(mentor2);
greetSomeone(mentor3);
greetSomeone(mentor4);
greetSomeone(mentor5);