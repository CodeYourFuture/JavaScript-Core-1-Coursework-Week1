var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function capitalize(name) {
    return name.toUpperCase();
}
// var result = capitalize(mentor1);
// console.log(result);
var shoutyMessage = "hello"

function greeting(string){
 return string.toUpperCase();
 
}
// var result2 = greeting(shoutyMessage);

// console.log(result2);

function shoutyGreeting(name, string){
  return  greeting(string) + " " + capitalize(name);
}

console.log(shoutyGreeting(mentor1, shoutyMessage));
console.log(shoutyGreeting(mentor2, shoutyMessage));
console.log(shoutyGreeting(mentor3, shoutyMessage));
console.log(shoutyGreeting(mentor4, shoutyMessage));
console.log(shoutyGreeting(mentor5, shoutyMessage));


