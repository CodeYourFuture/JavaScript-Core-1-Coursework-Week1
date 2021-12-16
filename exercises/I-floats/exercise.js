
//Using the variables provided in the exercise calculate the percentage of mentors and students in the group

var numberOfStudents = 15;
var numberOfMentors = 8;
var total =  numberOfStudents + numberOfMentors;
var percentageOfStudents = (Math.round(numberOfStudents/total * 100));
var percentageOfMentors = (Math.round(numberOfMentors / total * 100));


console.log (`percentage students:${percentageOfStudents}%`);
console.log(`percentage mentors:${percentageOfMentors}%`);
