var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shouty(mentor) {
    return mentor.toUpperCase();
}

function greeting(mentor) {
    let shoutyMentor = shouty(mentor);
    let shoutyGreeting = 'hello '.toUpperCase();
    return shoutyGreeting + shoutyMentor;
}

console.log(greeting("Daniel"));
console.log(greeting("Irina"));
console.log(greeting("Mimi"));
console.log(greeting("rob"));
console.log(greeting("Yohannes"));
