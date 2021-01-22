var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function nameUppercase (name) {
    return name.toUpperCase();
}

function myGreeting (greet) {
    let shoutName = nameUppercase (greet);
    return `HELLO ${shoutName}`;
}

console.log(myGreeting(mentor1));
console.log(myGreeting(mentor2));
console.log(myGreeting(mentor3));
console.log(myGreeting(mentor4));
console.log(myGreeting(mentor5));