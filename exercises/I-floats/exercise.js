var numberOfStudents = 15;
var numberOfMentors = 8;
var TotalNumnberOfStudentsAndMentors = numberOfStudents + numberOfMentors
var percentageOfStudents = numberOfStudents / TotalNumnberOfStudentsAndMentors * 100
var percentageOfMentors = numberOfMentors / TotalNumnberOfStudentsAndMentors * 100
var roughPercentageOfStudents = Math.round(percentageOfStudents)
var roughPercentageOfMentors = Math.round(percentageOfMentors)

console.log(roughPercentageOfStudents)
console.log(roughPercentageOfMentors)
