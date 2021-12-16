var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function toUpperCase(name){
    return name.toUpperCase();
}
function sayHello(mentor){
    let upperLetter = toUpperCase(mentor);
    return `HELLO ${upperLetter}`;
}
console.log(sayHello(mentor1));
console.log(sayHello(mentor2));
console.log(sayHello(mentor3));
console.log(sayHello(mentor4));
console.log(sayHello(mentor5));
