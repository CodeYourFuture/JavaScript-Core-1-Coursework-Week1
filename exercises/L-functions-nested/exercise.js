function groupPercentage(num1, num2){
    let totalInGroup = num1 + num2;    
    return calculatePercentage = Math.round((num1 / totalInGroup) * 100);
}

function message(numberOfStudents, numberOfMentors){
    let percentageOfStudents = groupPercentage(numberOfStudents, numberOfMentors);
    let percentageOfMentors = groupPercentage (numberOfMentors, numberOfStudents);
    return displayPercentage = `Percentage students: ${percentageOfStudents}%\nPercentage students: ${percentageOfMentors}%`;
}
 let percentage = message(15, 8);
 console.log(percentage);


// Exercise 2

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutyGreeting(mentor){
    let blockNames = mentor.toUpperCase();
    return greeting = `HELLO ${blockNames}`;

}

var firstGreeting = shoutyGreeting(mentor1);
var secondGreeting = shoutyGreeting(mentor2);
var thirdGreeting = shoutyGreeting(mentor3);
var fourthGreeting = shoutyGreeting(mentor4);
var fifthGreeting = shoutyGreeting(mentor5);

console.log(firstGreeting);
console.log(secondGreeting);
console.log(thirdGreeting);
console.log(fourthGreeting);
console.log(fifthGreeting);