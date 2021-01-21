var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function greet(name){
    return "Hello " + name;
}

function capitalize(name){
    var upperCased = greet(name);
    return upperCased.toUpperCase();
}
console.log(capitalize(mentor1));
console.log(capitalize(mentor2));
console.log(capitalize(mentor3));
console.log(capitalize(mentor4));
console.log(capitalize(mentor5));

