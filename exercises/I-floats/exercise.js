var numberOfStudents = 14.488;
var roundStudent = Math.round(numberOfStudents);
var numberOfMentors = 8.655;
var roundMentor = Math.round(numberOfMentors)

let total = numberOfStudents + numberOfMentors;



console.log('Percentage students: ' + numberOfStudents / (roundStudent + roundMentor) + '%');
console.log('Percentage students: ' + numberOfMentors / total + '%');