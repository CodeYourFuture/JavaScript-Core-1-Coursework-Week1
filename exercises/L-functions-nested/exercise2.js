 
// function percentageNumber(numOfPeople, totalNumOfPeople) {
//     return numOfPeople * 100 / totalNumOfPeople;
// }
// var numOfStudents = percentageNumber(15, 23);
// var numOfMentors = percentageNumber(8, 23);

// function message(a, b) {
//     return `Percentage of ${a} = ${b}`;
// }

// message('Students ', Math.round(numOfStudents));
// console.log(message);

// message('Mentors ', Math.round(numOfMentors));
// console.log(message);

function percentage(numOfPeople, totalNumOfPeople) {
    return Math.round((numOfPeople * 100 / totalNumOfPeople));
}

var percentageStudents = percentage(15,23);
var percentageMentors = percentage(8, 23);

function message() {
    return(`Percentage Students: ${percentageStudents}
    Percentage Mentors: ${percentageMentors}`);
}

console.log(message);