let numberOfStudents    = 15;
let numberOfMentors     = 8;
totalStudentsAndMentors = numberOfStudents + numberOfMentors;
percentageOfStudents    = (numberOfStudents/totalStudentsAndMentors)*100;
percentageOfMentors     = (numberOfMentors/totalStudentsAndMentors)*100;
console.log("Percentage students: "+ Math.round(percentageOfStudents)+"%");
console.log("Percentage mentors: "+ Math.round(percentageOfMentors)+"%")
