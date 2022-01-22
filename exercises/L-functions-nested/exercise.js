var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCase(a) {
    return a.toUpperCase();
}


function greeting(name) {     
    return `HELLO ${upperCase(name)} `
}

let greetings = greeting(mentor1) + '\n' + greeting(mentor2) + "\n" + greeting(mentor3) + "\n" + greeting(mentor4) +"\n"+greeting(mentor5);

console.log(greetings)