var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function makeUpperCase(name){
    return name.toUpperCase();
}
function greetMentor(mentorName){
    return "HEllO "+ makeUpperCase(mentorName);
}
let greeting1=greetMentor(mentor1)
let greeting2=greetMentor(mentor2)
let greeting3=greetMentor(mentor3)
let greeting4=greetMentor(mentor4)
let greeting5=greetMentor(mentor5)

console.log(greeting1)
console.log(greeting2)
console.log(greeting3)
console.log(greeting4)
console.log(greeting5)