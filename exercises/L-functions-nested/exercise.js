// exercise 1
var students = 8;
var mentors = 15;

function percentage(total){

var sum = students + mentors;
return Math.round(total/sum *100) + "%";

}

function result(message, type){
return message + type;

}

console.log(result("The percentage of ", "students in the class is ") + percentage(8));
console.log(result("The percentage of ", "mentors in the class is ") + percentage(15));

// exercise2

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCase(name){
    return name.toUpperCase();
}

function greeting(name){
    return "HELLO " + name + "!";
}

console.log(greeting(upperCase(mentor1)));
console.log(greeting(upperCase(mentor2)));
console.log(greeting(upperCase(mentor3)));
console.log(greeting(upperCase(mentor4)));
console.log(greeting(upperCase(mentor5)));
