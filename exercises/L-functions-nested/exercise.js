
function calculatePercent(num,sum) {
    return Math.round(num/sum *100);
}

var percentageOfStudents = calculatePercent(15,23);
var percentageOfMentors = calculatePercent(8,23);


function percentageMessage(individual,percentage){
    message = "The percentage of " +individual + " is " + percentage +"%.";
    return message;

}
    
console.log(percentageMessage("students",percentageOfStudents));
console.log(percentageMessage("mentors",percentageOfMentors));


function greeting(name){
    return "HELLO " + name;
}

    var mentor1 = "Daniel";
    var mentor2 = "Irina";
    var mentor3 = "Mimi";
    var mentor4 = "Rob";
    var mentor5 = "Yohannes";

console.log(greeting(mentor1));
console.log(greeting(mentor2));
console.log(greeting(mentor3));
console.log(greeting(mentor4));
console.log(greeting(mentor5));
