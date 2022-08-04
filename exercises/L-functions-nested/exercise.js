var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

const shoutGreeting = (firstName) => {
    let shout = firstName.toUpperCase();
    return `HELLO ${shout}`;
}
console.log(shoutGreeting(mentor1));
console.log(shoutGreeting(mentor2));
console.log(shoutGreeting(mentor3));
console.log(shoutGreeting(mentor4));
console.log(shoutGreeting(mentor5));