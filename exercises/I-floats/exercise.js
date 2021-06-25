var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;
var students = "Percentage Students are :";
var mentors = "Percentage Mentors are :";
var PercentageStudents = students + (numberOfStudents / total) * 100;
var PercentageMentors = mentors + (numberOfMentors / total) * 100;
console.log(PercentageStudents);
console.log(PercentageMentors);