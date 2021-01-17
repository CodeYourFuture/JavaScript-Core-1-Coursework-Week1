//- In `exercise.js` write a program that displays the percentage of students and mentors in the group
//- The percentage should be rounded to the nearest whole number (use a search engine to find out how to this with JavaScript)
//- You should have one function that calculates the percentage, and one function that creates a message

function percentageOfStudentsAndMentors(numberOfStudents, numberOfMentors){
    let total = numberOfStudents + numberOfMentors;
    let percentageStudents = Math.round((numberOfStudents / total) * 100);
    let percentageMentors = Math.round((numberOfMentors / total) * 100);
    return `Percentage mentors: ${percentageStudents}%\nPercentage students: ${percentageMentors}%`;
}

console.log(percentageOfStudentsAndMentors(15, 8));