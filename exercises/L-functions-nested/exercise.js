var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function creatName(name) {
    var mentorName = name.toUpperCase();
    return mentorName;
}

function greeting(mentor) {
    var theirName = creatName(mentor);
    var message = `Hello, ${theirName} `;
    return message;
}

console.log(greeting(mentor1));
console.log(greeting(mentor2));
console.log(greeting(mentor3));
console.log(greeting(mentor4));
console.log(greeting(mentor5));