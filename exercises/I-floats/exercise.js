var numberOfStudents = 15;
var numberOfMentors = 8;
var totalStMe = numberOfMentors + numberOfStudents;

function percentage(no1, no2){
    outPut = Math.round((no2/no1)*100);
    return outPut
}

console.log(`Percentage students: ${percentage(totalStMe, numberOfStudents)}%`);
console.log(`Percentage mentors: ${percentage(totalStMe, numberOfMentors)}%`);