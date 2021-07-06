let numberOfStudents = 15;

 let  numberOfMentors = 8;

 let total = numberOfStudents +  numberOfMentors;
 let percentageOfStudentsCalc = (numberOfStudents / total ) * 100;
let percentageOfMentorsCalc =(numberOfMentors / total) * 100;
 let percentageOfStudents = Math.round(percentageOfStudentsCalc);
let percentageOfMentors = Math.round(percentageOfMentorsCalc);

console.log('Percentage students: ' +  percentageOfStudents + '%');
console.log('Percentage mentors: ' +  percentageOfMentors + '%');


 
