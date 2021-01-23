var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutyName(name) {
    return name.toUpperCase();
}
var shoutName1 = shoutyName(mentor1);
var shoutName2 = shoutyName(mentor2);
var shoutName3 = shoutyName(mentor3);
var shoutName4 = shoutyName(mentor4);
var shoutName5 = shoutyName(mentor5);

function greetName(name) {
    return "HELLO " + name;
} 
var greeting1 = greetName(shoutName1);
var greeting2 = greetName(shoutName2);
var greeting3 = greetName(shoutName3);
var greeting4 = greetName(shoutName4);
var greeting5 = greetName(shoutName5);

console.log(greeting1);
console.log(greeting2);
console.log(greeting3);
console.log(greeting4);
console.log(greeting5);