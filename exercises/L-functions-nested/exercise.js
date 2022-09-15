

const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Mimi";
const mentor4 = "Rob";
const mentor5 = "Yohannes";

function getMentorsUppercase(mentor){
    return mentor.toUpperCase();
}
function concatShoutyGreeting(mentor){
    return "HELLO " + getMentorsUppercase(mentor);
}
console.log(concatShoutyGreeting(mentor1));
console.log(concatShoutyGreeting(mentor2));
console.log(concatShoutyGreeting(mentor3));
console.log(concatShoutyGreeting(mentor4));
console.log(concatShoutyGreeting(mentor5));