var mentor1 = "Daniel! ";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function nameUpperCase (name) {
    return name.toUpperCase();
}

function greetingMentors (name) {
    return `hello ${nameUpperCase(name)}`;
}

console.log(greetingMentors(mentor1));
console.log(greetingMentors(mentor2));
console.log(greetingMentors(mentor3));
console.log(greetingMentors(mentor4));
console.log(greetingMentors(mentor5));