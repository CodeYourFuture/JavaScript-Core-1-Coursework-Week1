



var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;

function percentageOfGroup(firstGroup, total){
    return Math.round((firstGroup / total) * 100);
} 




function sentenceOne(groupName) {
    var percentageOfStudents = percentageOfGroup(15, 23);
  
    return `${groupName}: ${percentageOfStudents}%`
}

console.log(sentenceOne);

