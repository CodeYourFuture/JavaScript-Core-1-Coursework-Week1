let numberOfStudents = 15
let numberOfMentors = 8

let total = numberOfStudents + numberOfMentors

let percentageStudents = (numberOfStudents * 100) / total
let percentageMentors = (numberOfMentors * 100) / total

console.log('Percentage students: ' + Math.round(percentageStudents) + '%')
console.log('Percentage mentors: ' + Math.round(percentageMentors) + '%')
