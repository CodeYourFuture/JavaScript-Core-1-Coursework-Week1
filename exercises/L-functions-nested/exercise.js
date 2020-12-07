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

let numberStudents = 64.5;
let numberMentors = 34.5;

function percentage (number, total) {
    let result = Math.round (numberStudents);
    return result;
}

let numberStudentsPerc= percentage (numberStudents);
console.log( "Percentage students " + numberStudents + " % ")

let numberMentorsPerc= percentage (numberMentors);
console.log ("Percentage of Mentors " + numberMentors + "%")






