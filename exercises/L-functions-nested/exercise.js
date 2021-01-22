// exercise 1
var students = 8;
var mentors = 15;
function percentage(total){

var sum = students + mentors;
return Math.round(total/sum *100);

}

function result(message){
console.log(message + percentage(8) + "%");
console.log( message + percentage(15) + "%");
}
 result("The percentage of students in the class is ");
 result("The percentage of mentors in the class is ");

// exercise2

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
