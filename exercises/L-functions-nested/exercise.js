const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Mimi";
const mentor4 = "Rob";
const mentor5 = "Yohannes";
const name = (mentor1, mentor2, mentor3, mentor4, mentor5);
function greetingName(name){
    const upperName = name.toUpperCase();
    const message = " Hello " + upperName;
    return message;
}
console.log(greetingName(mentor1));
console.log(greetingName(mentor2));
console.log(greetingName(mentor3));
console.log(greetingName(mentor4));
console.log(greetingName(mentor5));