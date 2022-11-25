let numberOfStudents = 15;
let numberOfMentors = 8;
let sum = (numberOfStudents + numberOfMentors);

let percentage = function percent(val, total){ 
 return (Math.round(val / total) * 100 );
}

let perOfStud = percentage(numberOfStudents, sum);
let perOfMent = percentage(numberOfMentors, sum); 
console.log(`Percentage students: ${perOfStud}`);
console.log(`Percentage Mentors: ${perOfMent}`);
