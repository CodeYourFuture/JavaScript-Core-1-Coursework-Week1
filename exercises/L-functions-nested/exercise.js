function percentage(number, total){
    return Math.round((number / total) * 100);
};


function getResults(type, number, total){
    var getPercentage = percentage(number, total);
    return `Percentage ${type}: ${getPercentage}%`;
};

console.log(getResults("students",15,23));
console.log(getResults("mentors",8,23));
