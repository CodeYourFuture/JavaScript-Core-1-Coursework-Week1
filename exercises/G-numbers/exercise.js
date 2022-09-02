// Start by creating a variables `numberOfStudents` and `numberOfMentors`
function sumStudentsAndMentors (a,b){
    return a+b;
}
var numberOfStudents = 15;
console.log("Number of students: "+numberOfStudents);
var numberOfMentors = 8;
console.log("Number of mentors: "+numberOfMentors);
var total = sumStudentsAndMentors(numberOfStudents, numberOfMentors);
console.log("Total number of students and mentors: " + total); // with use function
console.log("Total number of students and mentors: " + (numberOfMentors+numberOfStudents)); //just use basic sum