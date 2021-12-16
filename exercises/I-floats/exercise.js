var numberOfStudents = 15;
var numberOfMentors = 8;

var sum=numberOfStudents +numberOfMentors;
var difference=numberOfStudents%numberOfMentors;
var percentage=(Math.round(sum/numberOfStudents)*100);
var percentage1=(Math.round(difference/numberOfMentors)*100);
console.log(`percentage of students ${percentage}`)
console.log(`percentage of mentors ${percentage1}`)
