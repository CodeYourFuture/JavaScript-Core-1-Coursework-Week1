var numberOfStudents = 15;
var numberOfMentors = 8;
var sum = numberOfStudents + numberOfMentors;
var percentageStudents = Math.round((numberOfStudents / sum) * 100);
var percentageMentor = Math.round((numberOfMentors / sum) * 100);
var result =
    "Percentage students:" +
    percentageStudents +
    "\nPercentage mentors: " +
    percentageMentor;
console.log(result);