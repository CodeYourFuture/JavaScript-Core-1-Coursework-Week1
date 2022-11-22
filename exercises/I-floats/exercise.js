var numberOfStudents = 15 
var numberOfMentors = 8
var total = numberOfStudents + numberOfMentors;
var percentageStudents = numberOfStudents / total * 100;
var percentageMentors = numberOfMentors / total * 100
console.log(`Percentage students : ${Math.round(percentageStudents)}%`)
console.log(`Percentage mentors : ${Math.round(percentageMentors)}%`)