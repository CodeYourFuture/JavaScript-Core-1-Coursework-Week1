const numberOfStudents = 15;
const numberOfMentors = 8;
const totalNumber = numberOfStudents + numberOfMentors;
const percentOfStudent = Math.round((numberOfStudents / totalNumber) * 100);
const percentOfMentor = Math.round((numberOfMentors / totalNumber) * 100);
const message1 = "Percentage students: " + percentOfStudent + "%";
const message2 = "Percentage mentors: " + percentOfMentor + "%";
console.log(message1);
console.log(message2);
