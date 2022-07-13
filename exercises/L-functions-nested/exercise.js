var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

/***************Exercise 1***********************/

function percentageCalculator(people,num, total){ 
     let percent=(num/total)*100;
function message(){
    return "Percentage "+people+": "+percent+"%";
}
return message();
}
console.log(percentageCalculator("Mentors", 8, 16));

/***************Exercise 2***********************/
function greetings(name){
     var up=name.toUpperCase();
function toUppercase(){
    return up;
}
return "HELLO "+up;
}
console.log(greetings(mentor1));
console.log(greetings(mentor2));
console.log(greetings(mentor3));
console.log(greetings(mentor4));
console.log(greetings(mentor5));
