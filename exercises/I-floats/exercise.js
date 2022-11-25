var numberOfStudents = 15;
var numberOfMentors = 8;
var total=numberOfMentors + numberOfStudents;
var numberOfMen=Math.round((numberOfMentors/total)*100);
let perOfMen=numberOfMen +  `%`;
var numberOfStu=Math.round((numberOfStudents/total)*100);
let perOfStu=numberOfStu +  `%`;
console.log(perOfMen);
console.log(perOfStu);
