// ***** test out the example
// function getAgeInDays(age) {
//   return age * 365;
// }

// function createCreeting(name, age) {
//   var ageInDays = getAgeInDays(age);
//   var message =
//     "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
//   return message;
// }

// let test = createCreeting('Liew', 999);

// console.log(test);

// Exercise 1
console.log('Exercise 1:' + '\n');
function calPercentage (num1, num2){
    return Math.floor(num1/(num1 + num2) * 100);
}

function greeting (category, percentage){
    return 'Percentage ' + category + ': ' + percentage + '%';
}

let students = 15;
let mentors = 8;
let percentageOfStudents = calPercentage (students, mentors);
let percentageOfMentors = calPercentage (mentors, students);

console.log (greeting('students', percentageOfStudents));
console.log (greeting('mentors', percentageOfMentors));

// Exercise 2
console.log('\n************************' + '\n' + 'Exercise 2:' + '\n');

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function changeToUpperCase (name){
    return name.toUpperCase();
}

function greetingShout (mentor){
    return 'HELLO ' + changeToUpperCase(mentor);
}

console.log(greetingShout(mentor1));
console.log(greetingShout(mentor2));
console.log(greetingShout(mentor3));
console.log(greetingShout(mentor4));
console.log(greetingShout(mentor5));

