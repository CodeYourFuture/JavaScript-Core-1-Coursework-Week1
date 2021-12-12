var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function nameHandler(name) {
  let myName = name.toUpperCase();
  return myName;
}
function greeting(mentor) {
  let mentorName = nameHandler(mentor);
  let meessage = `Hi ${mentorName}, thank you!`;
  return meessage;
}

console.log(greeting(mentor1));
console.log(greeting(mentor2));
console.log(greeting(mentor3));
console.log(greeting(mentor4));
console.log(greeting(mentor5));
