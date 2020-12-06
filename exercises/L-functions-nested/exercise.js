var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


var greeting ="Hello " ;

function myFunction (){
    return "HELLO " ;
}

var greeting = myFunction (mentor1);
var greeting = myFunction (mentor2);
var greeting = myFunction (mentor3);
var greeting = myFunction (mentor4);
var greeting = myFunction (mentor5);

console.log(greeting + mentor1.toUpperCase());
console.log(greeting + mentor2.toUpperCase());
console.log(greeting + mentor3.toUpperCase());
console.log(greeting + mentor4.toUpperCase());
console.log(greeting + mentor5.toUpperCase());

let numberStudents = 65;
let numberMentors = 35;

function percentage (number, total) {
    let result = Math.round (numberStudents);
    return result;
}

let numberStudentsPerc= percentage (numberStudents);
console.log( "Percentage students " + numberStudents + " % ")


function percentage (number,total) {
    let result = Math.round (numberMentors);
    return result;
}

let numberMentorsPerc= percentage (numberMentors);
console.log( "Percentage Mentors " + numberMentors + " % ")







