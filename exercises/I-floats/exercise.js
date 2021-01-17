const numberOfStudents = 15;
const numberOfMentors = 8;

//Getting the total number of people either students or mentors
const totalNumberOfPeople = numberOfMentors + numberOfStudents;

//Getting the percentage of mentors and students
const studentPercentage = (numberOfStudents / totalNumberOfPeople) * 100;
const mentorPercentage = (numberOfMentors / totalNumberOfPeople) * 100;

console.log(`Percentage students: ${Math.round(studentPercentage)}%`);
console.log(`Percentage mentors: ${Math.round(mentorPercentage)}%`);
