var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function nameUpppercase(name){
    var nameUP = name.toUpperCase();
    return nameUP;
}
function shoutyGreeting(name){
    var greetingUP = "hello " + name;
    return greetingUP.toUpperCase();
}

console.log(shoutyGreeting(mentor1));
console.log(shoutyGreeting(mentor2));
console.log(shoutyGreeting(mentor3));
console.log(shoutyGreeting(mentor4));
console.log(shoutyGreeting(mentor5));


