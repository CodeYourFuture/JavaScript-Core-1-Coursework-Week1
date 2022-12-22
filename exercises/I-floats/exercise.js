let numberOfStudents = 15;
let numberOfMentors = 8;

let total = numberOfStudents + numberOfMentors;

console.log(`total number of studentes and mentor:  ${total}`);

let porcentage = (numberOfStudents/total ) * 100; //here we did the average and the number return float
let porcentageB = (numberOfMentors/total ) * 100;

console.log(`Porcentage students ${Math.round(porcentage)}%`);// here we use the comand Math.round to make it again integer and we added %

console.log(`Porcentage Mentors ${Math.round(porcentageB)}%`);
