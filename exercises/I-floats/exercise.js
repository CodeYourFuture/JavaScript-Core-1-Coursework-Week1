var numberOfStudents = 15;
var numberOfMentors = 8;
const sum = numberOfStudents + numberOfMentors;
const sp = (numberOfStudents / sum) * 100;
const mp = (numberOfMentors / sum) * 100;
console.log(`Percentage students: ${Math.round(sp)}%`);
console.log(`Percentage mentors: ${Math.round(mp)}%`);
