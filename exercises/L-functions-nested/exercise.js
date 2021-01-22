var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function percentageOfStudentsAndMentors(numberOfStudents, numberOfMentors){
    let total = numberOfStudents + numberOfMentors;
    let percentageStudents = Math.round((numberOfStudents / total) * 100);
    let percentageMentors = Math.round((numberOfMentors / total) * 100);
    return `Percentage mentors: ${percentageStudents}%\nPercentage students: ${percentageMentors}%`;
}

console.log(percentageOfStudentsAndMentors(15, 8));

