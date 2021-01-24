var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCase(name) {
    return name.toUpperCase();
}

var upperCaseName = upperCase("Daniel");



function shoutyGreeting (greeting, name) {
    var upperCaseName = upperCase(name);
    
    return `${greeting} ${upperCaseName}`;
}

var firstShoutyGreeting = shoutyGreeting("Hello", "Daniel" );

console.log(firstShoutyGreeting);

var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfMentors + numberOfStudents;

function percentageOfGroup(firstGroup, total) {
    return Math.round((firstGroup / total) * 100);
}




function sentenceOne(groupName, firstGroup, total) {
    var percentageOfStudents = percentageOfGroup(firstGroup, total);

    return `${groupName}: ${percentageOfStudents}%`
}

var numberStudents = sentenceOne("Percentage students",15,23)
console.log(numberStudents);
