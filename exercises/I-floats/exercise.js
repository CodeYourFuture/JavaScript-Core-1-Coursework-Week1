var numberOfStudents = 15;
var numberOfMentors = 8;

let totalInClass = numberOfStudents + numberOfMentors;

let percentageStudents = (numberOfStudents /totalInClass * 100);


let roundedResultStudents = Math.round(percentageStudents) + "%";

let percentageMentors = (numberOfMentors /totalInClass * 100);


let roundedResultMentors = Math.round(percentageMentors) + "%";


console.log(roundedResultStudents);

console.log(roundedResultMentors);