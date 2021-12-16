var numberOfStudents = 15;
var numberOfMentors = 8;
let totalStudentAndMentors = numberOfMentors + numberOfStudents
let studentPercentage = (numberOfStudents / totalStudentAndMentors) * 100
let roundStudentPercentage = Math.round(studentPercentage)
let mentorsPercentage = (numberOfMentors / totalStudentAndMentors) * 100
let roundMentorsPercentage = Math.round(mentorsPercentage)
console.log(`Percentage students: ${roundStudentPercentage}%`)
console.log(`Percentage mentors: ${roundMentorsPercentage}%`)
