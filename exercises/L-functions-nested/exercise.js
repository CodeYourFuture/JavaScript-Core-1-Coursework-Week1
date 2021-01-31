//Exercise 1
// function percentage(perc) {
//     return perc;
// }

// function createMessage(name, perc) {
//     let message = 'Percentage ' + name + ' ' + perc + '%';
//     return message;
// }

// console.log(createMessage('Student', 65));
// console.log(createMessage('Mentor', 35));



//Exercise 2
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCase(names) {
    return names.toUpperCase();
}

function shoutyMessage(names) {
    return ` HELLO ${names}`;
}

console.log(shoutyMessage(upperCase(mentor1)));
console.log(shoutyMessage(upperCase(mentor2)));
console.log(shoutyMessage(upperCase(mentor3)));
console.log(shoutyMessage(upperCase(mentor4)));
console.log(shoutyMessage(upperCase(mentor5)));