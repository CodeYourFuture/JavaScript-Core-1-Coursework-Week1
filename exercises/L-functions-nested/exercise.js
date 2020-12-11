
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
var str = "Hello";
var mentor = [mentor1, mentor2, mentor3, mentor4, mentor5];

function shoutyGreeting(str, mentor) {
    return str + " " + mentor;
    
}

var greeting = shoutyGreeting(str, mentor);

console.log(shoutyGreeting(str, mentor1));
console.log(shoutyGreeting(str, mentor2));
console.log(shoutyGreeting(str, mentor3));
console.log(shoutyGreeting(str, mentor4));
console.log(shoutyGreeting(str, mentor5));