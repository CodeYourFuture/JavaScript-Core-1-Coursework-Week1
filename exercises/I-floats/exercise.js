var numberOfStudents = 15;
var numberOfMentors = 8;
percentageStudent = Math.round(numberOfStudents *100/(numberOfStudents + numberOfMentors));
percentageMentor =  Math.round(numberOfMentors*100/(numberOfMentors + numberOfStudents));
console.log(`Percentage of students: ${percentageStudent}%`);
console.log(`Percentage of mentors: ${percentageMentor}%`);
