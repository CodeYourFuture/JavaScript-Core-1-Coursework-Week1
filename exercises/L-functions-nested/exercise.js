var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function upperName(name) {
    return name.toUpperCase()
}

function greeting(name) {

    var upperspell = upperName(name)
    var massage = 'Hello ' + name;
    return massage;
}
console.log(greeting(mentor1));
console.log(greeting(mentor2));
console.log(greeting(mentor3));
console.log(greeting(mentor4));
console.log(greeting(mentor5));