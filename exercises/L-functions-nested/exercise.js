// function percentage(num,total) {
//     return (num/total*100);
// }

// var numberOfStudents = 15;
// var numberOfMentors = 8;
// var total = numberOfStudents + numberOfMentors;
// var totalPercentage = percentage(numberOfStudents,numberOfMentors,total);

// function initialMessage(numberOfStudents, numberOfMentors){
//     message = `totalPercentage: ${numberOfStudents} ${numberOfMentors} ${Math.round(percentage)}%`;
//     return message;
// }

// console.log(totalPercentage);

function percentage(num, total) {
    return Math.round((num / total) * 100);
}

var numberOfStudents = 33;
var numberOfMentors = 13;

let total = numberOfStudents + numberOfMentors;
let totalPercentageStudents = percentage(numberOfStudents, total);
let totalPercentageMentors = percentage(numberOfMentors, total);

// function percentageType(catagory, percent) {
//     // let message1 = `Percentage Students: ${totalPercentageStudents}`;
//     // let message2 = `Percentage Mentors: ${totalPercentageMentors}`;
//     return notemessage1, message2;
// }

console.log(`Percentage Students: ${totalPercentageStudents}`);
console.log(`Pencentage Mentors: ${totalPercentageMentors}`);
    










// var mentor1 = "Daniel";
// var mentor2 = "Irina";
// var mentor3 = "Mimi";
// var mentor4 = "Rob";
// var mentor5 = "Yohannes";

// function shoutyGreeting(name){
//     var greeting = name.toUpperCase();
//     return greeting = `HELLO ${greeting}`;
// }

// var greeting1 = shoutyGreeting(mentor1);
// var greeting2 = shoutyGreeting(mentor2);
// var greeting3 = shoutyGreeting(mentor3);
// var greeting4 = shoutyGreeting(mentor4);
// var greeting5 = shoutyGreeting(mentor5);

// console.log(greeting1);
// console.log(greeting2);
// console.log(greeting3);
// console.log(greeting4);
// console.log(greeting5);