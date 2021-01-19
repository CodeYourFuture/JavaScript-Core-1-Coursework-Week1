function calculatePercentage(numberOfFirstGroup, numberOfSecondGroup){
    var total = numberOfFirstGroup + numberOfSecondGroup;
    var percentageOfGroup = Math.round((numberOfFirstGroup / total) * 100);
    return percentageOfGroup;
    
}

function createMessage(firstGroupName, numberOfFirstGroup, numberOfSecondGroup){
    var message = "Percentage of " + firstGroupName + ": " + calculatePercentage(numberOfFirstGroup, numberOfSecondGroup) + "%";
    return message;
}

console.log(createMessage("students", 15, 8));

console.log(createMessage("mentors", 8, 15));






