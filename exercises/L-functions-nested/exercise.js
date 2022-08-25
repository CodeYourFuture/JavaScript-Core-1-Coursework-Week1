var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

// uppercase funciton

function uppercaseNames(fname) {
    return fname.toUpperCase();
}

console.log(uppercaseNames('ali'));

function createGreeting(greete, mentorname) {
    const firstName = uppercaseNames(mentorname);
    const greeting = greete.toUpperCase();
    return greeting + " " + firstName;
}

console.log(createGreeting('hello', mentor1));
console.log(createGreeting("hello", mentor2));
console.log(createGreeting("hello", mentor3));
console.log(createGreeting("hello", mentor4));
console.log(createGreeting("hello", mentor5));