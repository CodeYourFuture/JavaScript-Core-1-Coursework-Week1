var numberOfStudents = 15;
var numberOfMentors = 8;
let sum=numberOfStudents+numberOfMentors;

let percentStudents= Math.round(100*numberOfStudents/sum);
let percentMentors= Math.round(100*numberOfMentors/sum);

let message= "Percentage students: "+ percentStudents+"%\nPercentage mentors: "+percentMentors+"%"

console.log(sum);
console.log(percentStudents);
console.log(percentMentors);    


console.log(message);

