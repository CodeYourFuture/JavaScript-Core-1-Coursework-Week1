var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

//percentage before rounding up and showing them in console
var percentageOfStudents = (numberOfStudents / total) * 100;
var percentageOfMentors = (numberOfMentors / total) * 100;

console.log(percentageOfStudents);
console.log(percentageOfMentors);

//Rounding up percentages and showing them on console
var roundPercStudents = Math.round(percentageOfStudents);
var roundPercMentors = Math.round(percentageOfMentors);
console.log(roundPercStudents);
console.log(roundPercMentors);

//Declaring sentences by a string variable and showing them to the console
const studentResult = "Percentage of students is: " + roundPercStudents;
const mentorsResult = "Percentage of mentors is: " + roundPercMentors;

console.log(studentResult);
console.log(mentorsResult);
