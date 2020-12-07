// exercise one
function groupPercentage(num1, num2){
    let groupTotal = num1 + num2;    
    return calculatePercentage = Math.round((num1 / groupTotal) * 100);
}

function message(numberOfStudents, numberOfMentors){
    let percentageOfStudents = groupPercentage(numberOfStudents, numberOfMentors);
    let percentageOfMentors = groupPercentage (numberOfMentors, numberOfStudents);
    return displayPercentage = `Percentage students: ${percentageOfStudents}%\nPercentage students: ${percentageOfMentors}%`;
}
 let percentage = message(15, 8);
 console.log(percentage);

//  exercise 2

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shout(mentor) {
    let capNames = mentor.toUpperCase();
    return greeting = `HELLO ${capNames}`;
}

let firstGreeting = shout(mentor1);
let secondGreeting = shout(mentor2);
let thirdGreeting = shout(mentor3);
let fourthGreeting = shout(mentor4);
let fifthGreeting = shout(mentor5);

console.log(firstGreeting);
console.log(secondGreeting);
console.log(thirdGreeting);
console.log(fourthGreeting);
console.log(fifthGreeting);