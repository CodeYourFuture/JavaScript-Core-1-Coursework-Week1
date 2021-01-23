var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function createUpperCaseName (name) {
    var upperCaseName = name.toUpperCase();
    console.log(upperCaseName);
    return upperCaseName;
}

var nameResult = createUpperCaseName(mentor1);
var nameResult2 = createUpperCaseName(mentor2);
var nameResult3 = createUpperCaseName(mentor3);
var nameResult4 = createUpperCaseName(mentor4);
var nameResult5 = createUpperCaseName(mentor5);

function createUpperCaseGreeting (name) {
    var nameGreeting = "HELLO " + name;
    console.log(nameGreeting);
    return nameGreeting;
}

var result = createUpperCaseGreeting(nameResult);
var result2 = createUpperCaseGreeting(nameResult2);
var result3 = createUpperCaseGreeting(nameResult3);
var result4 = createUpperCaseGreeting(nameResult4);
var result5 = createUpperCaseGreeting(nameResult5);


