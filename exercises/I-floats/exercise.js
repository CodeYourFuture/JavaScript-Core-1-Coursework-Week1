let numOfStudents = 15; 
let numOfmentores = 8; 
let total = numOfStudents + numOfmentores; 

let percentageOfStudents = (numOfStudents / total) * 100; 
let percentageOfMentores = (numOfmentores / total) * 100; 

console.log("Percentage Students: " + Math.round(percentageOfStudents) + "%");
console.log("Percentage Mentores: " + Math.round (percentageOfMentores) + "%");
