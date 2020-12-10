// Exercise 1 (commented out to see the result of exercise 2)
/*
function percentage(num, per){
    return Math.round((num / (num + per)) * 100) + "%";
}

function print(students, mentors){
   var percentageS = percentage(students, mentors);
   var percentageM = percentage(mentors, students);
   return "Percentage students: " + percentageS;
   return "Percentage mentors: " + percentageM;
}

console.log(print(15, 8));
console.log(print(8, 15));

*/
//Exercise 2
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes"

function capitalL (text){
let nameUpper = text.toUpperCase();
return nameUpper;
}

function greet(name){
    var message = capitalL(name);
    return `HELLO ${message}`;
}

console.log(greet(mentor1));
console.log(greet(mentor2));
console.log(greet(mentor3));
console.log(greet(mentor4));
console.log(greet(mentor5));