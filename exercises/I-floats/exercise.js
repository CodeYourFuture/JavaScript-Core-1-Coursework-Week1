var numberOfStudents = 15;
var numberOfMentors = 8;

let Total = numberOfMentors + numberOfStudents;
let TotalNOS = numberOfStudents / Total * 100;
let TotalNOM = numberOfMentors / Total * 100;

let roundNOS = Math.round(TotalNOS)
let roundNOM = Math.round(TotalNOM)

console.log(roundNOS)
console.log(roundNOM)



