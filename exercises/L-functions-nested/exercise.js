var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
var greeting = "Hello".toLocaleUpperCase();

function nameUpperCase(name){
    return name.toUpperCase();
}


function shoutyGreeting(greeting, name) {
    
    var capitalName = nameUpperCase(name)
    return greeting + " " + capitalName;
    
}

var message1 = shoutyGreeting(greeting, mentor1);
var message2 = shoutyGreeting(greeting, mentor2);
var message3 = shoutyGreeting(greeting, mentor3);
var message4 = shoutyGreeting(greeting, mentor4);
var message5 = shoutyGreeting(greeting, mentor5);

console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);
console.log(message5);