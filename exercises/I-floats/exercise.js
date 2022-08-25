var numberOfStudents = 15;
var numberOfMentors = 8;
const total = numberOfStudents + numberOfMentors;

console.log(
	"Percentage students: " + Math.round((numberOfStudents / total) * 100) + "%"
);

console.log(
	"Percentage students: " + Math.round((numberOfMentors / total) * 100) + "%"
);
