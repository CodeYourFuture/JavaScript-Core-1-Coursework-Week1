var numberOfStudents = 15;
var numberOfMentors = 8;
const totalStudentMentors = numberOfStudents + numberOfMentors;
// percentages of students and mentors and change floats numbe to intergers

// option 1
const studentPercentage = `Stutend Percentage is : ${Math.round((numberOfStudents / totalStudentMentors) * 100)}`;
const mentorsPercentage = `Mentors Percentage is : ${Math.round((numberOfMentors / totalStudentMentors) * 100)}`;
console.log(studentPercentage);
console.log(mentorsPercentage);

// break down small steps

// option 2 

//1. get percentage of each varaible, 2. than round to the nearest whole number.

const finPercentageOfStudents = (numberOfStudents / totalStudentMentors) * 100;
const finPercentageOfMentors = (numberOfMentors / totalStudentMentors) * 100;
console.log(Math.round(finPercentageOfStudents));
console.log(Math.round(finPercentageOfMentors));

// it could be don in more smaller steps than this