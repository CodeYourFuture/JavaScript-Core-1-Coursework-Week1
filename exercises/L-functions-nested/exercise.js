let mentor1 = "Daniel";
let mentor2 = "Irina";
let mentor3 = "Mimi";
let mentor4 = "Rob";
let mentor5 = "Yohannes";


function toUpperCase(name) {
  return name.toUpperCase();
}
 
function myGreeting(mentor){
    let upperLetters = toUpperCase(mentor);
    return `HELLO ${upperLetters}`;
}


console.log(myGreeting(mentor1));
console.log(myGreeting(mentor2));
console.log(myGreeting(mentor3));
console.log(myGreeting(mentor4));
console.log(myGreeting(mentor5));