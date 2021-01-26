

function percentage(numOfPeople, totalNumOfPeople) {
    return Math.round((numOfPeople * 100 / totalNumOfPeople));
}


var percentageStudents = percentage(15,23);
var percentageMentors = percentage(8, 23);

function message() {
     return(`Percentage Students: ${percentageStudents}
Percentage Mentors: ${percentageMentors}`);    
}

console.log(message());