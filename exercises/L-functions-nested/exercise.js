var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutyGreeting(mentor){
    return mentor.toUpperCase();
}

function loudMessage(mentor, message){
    var getMentor = shoutyGreeting(mentor);
    message = "HELLO " + getMentor;
    return message;
}

console.log(loudMessage(mentor1));
console.log(loudMessage(mentor2));
console.log(loudMessage(mentor3));
console.log(loudMessage(mentor4));
console.log(loudMessage(mentor5));