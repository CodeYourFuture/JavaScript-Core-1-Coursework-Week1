var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function nameUppercase(name){
    return name.toUpperCase();
}

function greetingMentors(name) {
    return `HELLO lovely ${nameUppercase(name)}! welcome to my js test!`;
}

function greetingMentorsShouty(name){
    console.log(greetingMentors(name));
}

greetingMentorsShouty(mentor1);
greetingMentorsShouty(mentor2);
greetingMentorsShouty(mentor3);
greetingMentorsShouty(mentor4);
greetingMentorsShouty(mentor5);