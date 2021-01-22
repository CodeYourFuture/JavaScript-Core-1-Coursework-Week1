var numberOfStudents = 13
var numberOfMentors = 7

function calculatePercentage(number1, number2){
    var percentage1 = Math.round(number1*100/(number1+number2))
    return percentage1;
}

function createMessage(){
    console.log(`Percentage students: ${calculatePercentage(numberOfStudents,numberOfMentors)}%`)
    console.log(`Percentage mentors: ${calculatePercentage(numberOfMentors,numberOfStudents)}%`)
}

createMessage();
