// var mentor1 = "Daniel";
// var mentor2 = "Irina";
// var mentor3 = "Mimi";
// var mentor4 = "Rob";
// var mentor5 = "Yohannes";

const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Mimi";
const mentor4 = "Rob";
const mentor5 = "Yohannes";

function nameToUpperCase(name){
    return name.toUpperCase();
}
function greeting(name){
    return `Hello ${nameToUpperCase(name)}`;
}
function result(name){
    return console.log(greeting(name));
}
result(mentor1);
result(mentor3)