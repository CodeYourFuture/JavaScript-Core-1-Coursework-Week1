const mentor1 = "Musa";
const mentor2 = "Irina";
const mentor3 = "Mimi";
const mentor4 = "Rob";
const mentor5 = "Yohannes";
function upperCase(name){
    return name.toUpperCase();
}

function greeting (mentor){
    const upperLet = upperCase(mentor);
    return `HELLO ${upperLet}`;
}

console.log(greeting(mentor1));
console.log(greeting(mentor2));
console.log(greeting(mentor3));
console.log(greeting(mentor4));
console.log(greeting(mentor5));