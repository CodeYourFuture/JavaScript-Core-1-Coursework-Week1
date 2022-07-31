var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

//  In `exercise.js` you have been provided with the names of some mentors. Write a program that logs a shouty greeting to each one.
// - Your program should include a function that spells their name in uppercase, and a function that creates a shouty greeting.
// - Log each greeting to the console.

function mentorGreeting(name) {
  let getUpperCase = name.toUpperCase();
  return `Hello ${getUpperCase}`;
}

console.log(mentorGreeting(mentor1));
console.log(mentorGreeting(mentor2))
console.log(mentorGreeting(mentor3));
console.log(mentorGreeting(mentor4));
console.log(mentorGreeting(mentor5));


