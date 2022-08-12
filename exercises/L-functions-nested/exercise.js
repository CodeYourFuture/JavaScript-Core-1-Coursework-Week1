var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutyName(name) {
    return name.toUpperCase();
}

function shoutyGreet(name) {
    return "HELLO " + name.toUpperCase();
}

mentor1 = shoutyGreet(mentor1);
mentor2 = shoutyGreet(mentor2);
mentor3 = shoutyGreet(mentor3);
mentor4 = shoutyGreet(mentor4);
mentor5 = shoutyGreet(mentor5);


console.log(mentor1);
console.log(mentor2);
console.log(mentor3);
console.log(mentor4);
console.log(mentor5);