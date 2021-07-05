var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

// creating string the will introduce what the number or % is about
var students = "Percentage Students are :";
var mentors = "Percentage Mentors are :";

// This is precise calculation not round up yet.
var StudentProportion = (numberOfStudents / total) * 100;
var MentorsProportion = (numberOfMentors / total) * 100;

// This is the rounded percentage of the Student and Mentors
var roundedPercStudent = Math.round(StudentProportion);
var roundedPercMentor = Math.round(MentorsProportion);

// Now we are going to put whole things together
var StudentPercentage = students + roundedPercStudent + "%";
var mentorPercentage = mentors + roundedPercMentor + "%";

// console to see the output of the codeconsole.log(StudentProportion);
console.log(StudentPercentage);
console.log(mentorPercentage);


// Woow the output is as required!