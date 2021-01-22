var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function capitalName(name){
    return name.toUpperCase();
};

function shoutyGreeting(greeting, name){
    var getCapitalName = capitalName(name);
    return `${greeting.toUpperCase()} ${getCapitalName}`;
};

console.log(shoutyGreeting("hello",mentor1));
console.log(shoutyGreeting("hello",mentor2));
console.log(shoutyGreeting("hello",mentor3));
console.log(shoutyGreeting("hello",mentor4));
console.log(shoutyGreeting("hello",mentor5));