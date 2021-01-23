var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;
// console.log(total);
var percentageOfStudents = Math.round((numberOfStudents / total) * 100);
console.log(percentageOfStudents);

var percentageOfMentors = Math.round((numberOfMentors / total) * 100);
console.log(percentageOfMentors);
console.log("Percentage of students " + percentageOfStudents + " Percentage of mentors " + percentageOfMentors);
console.log(`Percentage of students ${percentageOfStudents} Percentage of mentors ${percentageOfMentors}`);

function percentageStudents(numberOfStudents, total){
    return (numberOfStudents / total) * 100;

}


// console.log(percentageStudents(15,23));
// console.log(percentageStudents(50, 100));

// function ageInDays (days, age, name) {
//     return `Hello ${name} I have been in the world for ${days * age} days`
 
// }
// console.log(ageInDays(365, 25, "Jim"));
// console.log(ageInDays(365, 45, "Blake"))
// function getRandomNumber() {
//     return Math.floor( Math.random()* 100)
// }
// console.log(getRandomNumber());