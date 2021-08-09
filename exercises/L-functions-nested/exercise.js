var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCaseString(string){
    //took me a while to clock this as vs wouldn't auto complete it (google helped :P)
    return string.toUpperCase()
}

function createShoutyGreeting(name){
    let getNameUpper = upperCaseString(name)
    return `HELLO, ${getNameUpper}`
}

console.log(createShoutyGreeting(mentor1));
console.log(createShoutyGreeting(mentor2));
console.log(createShoutyGreeting(mentor3));
console.log(createShoutyGreeting(mentor4));
console.log(createShoutyGreeting(mentor5));
