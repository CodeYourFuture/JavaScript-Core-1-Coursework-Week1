var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCaseName(name){ //function that upper case the name 
    let upperCase = name.toUpperCase();
    return upperCase;
}

function shoutyGreeting(name){ 
    let greeting = `HELLO ${upperCaseName(name)}`;
    return greeting; 
}

console.log(shoutyGreeting(mentor1));
console.log(shoutyGreeting(mentor2));
console.log(shoutyGreeting(mentor3));
console.log(shoutyGreeting(mentor4));
console.log(shoutyGreeting(mentor5));

