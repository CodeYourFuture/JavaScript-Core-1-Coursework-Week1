function calculate(num1, num2){
    return num1 / (num1 + num2) * 100;
}

function createPercentage(num1, num2) {
    var student = Math.round(calculate(num1, num2));
    var mentor = Math.round(calculate(num2, num1));
    var message = "Percentage students: " + student + "%" + "\nPercentage mentors: " + mentor + "%";
    return message;
}
console.log(createPercentage(15, 8));