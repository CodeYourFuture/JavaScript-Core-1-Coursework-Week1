function calculatePercentage(numberOfFirstGroup, numberOfSecondGroup){
    let total = numberOfFirstGroup + numberOfSecondGroup;
    let percentageOfGroup = Math.round((numberOfFirstGroup / total) * 100);
    return percentageOfGroup;
    
}

function createMessage(firstGroupName, numberOfFirstGroup, numberOfSecondGroup){
    let message = "Percentage of " + firstGroupName + ": " + calculatePercentage(numberOfFirstGroup, numberOfSecondGroup) + "%";
    return message;
}

console.log(createMessage("students", 15, 8));

console.log(createMessage("mentors", 8, 15));






