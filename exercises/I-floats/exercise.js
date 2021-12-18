var numberOfStudents = 15;
var numberOfMentors = 8;

let PS = "Percentage of Students: ";
let perSym = "%";
let PM = "Percentage of Mentors: ";

let numStuMen = numberOfStudents + numberOfMentors;
let stuPer = (numberOfStudents / numStuMen) * 100;
let menPer = (numberOfMentors / numStuMen) * 100;

console.log(PS + Math.round(stuPer) + perSym);
console.log(PM + Math.round(menPer) + perSym);
