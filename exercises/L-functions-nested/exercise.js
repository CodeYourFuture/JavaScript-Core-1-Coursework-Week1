    var mentor1 = "Daniel";
    var mentor2 = "Irina";
    var mentor3 = "Mimi";
    var mentor4 = "Rob";
    var mentor5 = "Yohannes";

function helloGreeting(name) {
    return name;     
}       
    function upperCaseGreeting(helloGreeting) {
        return ("Hello " + helloGreeting).toUpperCase();   
}

var greeting = helloGreeting;
var shoutyGreeting = upperCaseGreeting;


// console.log(greeting(mentor1));
// console.log(greeting(mentor2));
// console.log(greeting(mentor3));
// console.log(greeting(mentor4));
// console.log(greeting(mentor5));

console.log(shoutyGreeting(mentor1));
console.log(shoutyGreeting(mentor2));
console.log(shoutyGreeting(mentor3));
console.log(shoutyGreeting(mentor4));
console.log(shoutyGreeting(mentor5));

