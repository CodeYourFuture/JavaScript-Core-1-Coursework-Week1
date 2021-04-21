var numberOfStudents = 15;
var numberOfMentors = 8;
var totalOfStudentsAndMentors = numberOfStudents + numberOfMentors;
var percentageOfStudents = Math.round((numberOfStudents / totalOfStudentsAndMentors) * 100);
var percentageOfMentors = Math.round((numberOfMentors / totalOfStudentsAndMentors) * 100);


console.log("percentage students: " + percentageOfStudents);
console.log("percentage mentors: " + percentageOfMentors);

