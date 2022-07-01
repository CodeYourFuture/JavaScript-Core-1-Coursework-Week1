var numberOfStudents = 15;
var numberOfMentors = 8;

var percentSign = "%"
var total = numberOfStudents + numberOfMentors;
/*calculation for students*/

var text1 = "Percentage of Students ";
var percentageOfStudent = numberOfStudents / total * 100;
var roundNumberForStudent = Math.round(percentageOfStudent)

console.log(text1 + roundNumberForStudent + percentSign);

/*calculation for mentors*/
var text2 = "Percentage of Mentors ";
var percentageOfMentor = numberOfMentors / total * 100;
var roundNumberForMentor = Math.round(percentageOfMentor)
console.log(text2 + roundNumberForMentor + percentSign);