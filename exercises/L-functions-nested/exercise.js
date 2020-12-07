var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function percentage(total, num, percents) {
    percents = Math.round((total / num) * 100);
    return percents;
}

function printPercentage(percents) {
    var getPercentage = percentage(percents);
    var message = getPercentage;
    return message;
}
message = percentage(15, 23);
console.log("Percentage students: " + message + "%");
message = percentage(8, 23);
console.log("Percentage Mentors: " + message + "%");