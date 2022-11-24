var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function nameUppercase(name){
    return name.toUpperCase();
}

function greetSomeMentors(name) {
    return `HELLO THERE BOSS ${nameUppercase(name)}! HOWDY-DOO?!`;
}

function shoutAGreeting(name){
    console.log(greetSomeMentors(name));
}

shoutAGreeting(mentor1);
shoutAGreeting(mentor2);
shoutAGreeting(mentor3);
shoutAGreeting(mentor4);
shoutAGreeting(mentor5);

