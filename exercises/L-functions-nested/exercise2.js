var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperName(name){

    return name.toUpperCase()
};

function shoutyGreeting(name){
var message = 'HELLO' + upperName(name);
return message;

};

console.log(shoutyGreeting(' Daniel'));
console.log(shoutyGreeting(' Irina'));
console.log(shoutyGreeting(' Mimi'));
console.log(shoutyGreeting(' Rob'));
console.log(shoutyGreeting(' Yohannes'));