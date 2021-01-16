var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumberOfStudentsAndMentors = numberOfStudents + numberOfMentors;

var percentageAreStudents = (numberOfStudents / totalNumberOfStudentsAndMentors) * 100;
var percentageAreMentors = (numberOfMentors / totalNumberOfStudentsAndMentors) * 100;

var roundedPercentageAreStudents = Math.round(percentageAreStudents);
var roundedPercentageAreMentors = Math.round(percentageAreMentors);

console.log(roundedPercentageAreStudents + "% are students");
console.log(roundedPercentageAreMentors + "% are mentors");
