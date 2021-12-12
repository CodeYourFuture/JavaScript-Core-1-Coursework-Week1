var numberOfStudents = 15;
var numberOfMentors = 8;

var total = numberOfStudents + numberOfMentors;

var perStu = (numberOfStudents / total) * 100;

var perMen = (numberOfMentors / total) * 100; 

var perMenTo = Math.round(perMen)+"%";
var perStuTo = Math.round(perStu)+"%";

console.log(perMenTo, perStuTo)
