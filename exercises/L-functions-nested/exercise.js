function percentage (num) {
    return Math.round(num / 23 * 100);
}

function results (name, num) {
    var value = percentage(num);
    var message = "Percentage of " + name + ":" + " " + value + "%";
    return message;
}

console.log(results("students", 15));
console.log(results("mentor", 8));