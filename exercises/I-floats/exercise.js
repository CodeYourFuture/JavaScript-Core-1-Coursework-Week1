

const numberOfStudents = 15 ;

const numberOfMentors = 8 ;

const total = numberOfStudents + numberOfMentors;

console.log("Number of students: " + numberOfStudents );
console.log("Number of mentors: " + numberOfMentors);
console.log("Total number of students and mentors: " + total  );

const percentageStud = numberOfStudents / total * 100;

const percentageMent = numberOfMentors / total * 100;

console.log( "\r" + "Percentage students: " + percentageStud);// before round
console.log("Percentage mentors: " + percentageMent);//before math.round()

console.log( "\r" + "Percentage students: " + Math.round(percentageStud));
console.log("Percentage mentors: " + Math.round(percentageMent));