// - In `exercise.js` you have been provided with the names of some mentors. Write a program that logs a shouty greeting to each one.
// - Your program should include a function that spells their name in uppercase, and a function that creates a shouty greeting.
// - Log each greeting to the console.

let mentor1 = "Daniel";
let mentor2 = "Irina";
let mentor3 = "Mimi";
let mentor4 = "Rob";
let mentor5 = "Yohannes";

const allCapitals = (namePerson) => {
  return namePerson.toUpperCase();
}

const greetMentors = (mentor) => {
  let upperCaseName = allCapitals(mentor)
  return `A big shout out to ${upperCaseName}. You rock!`;
}

console.log(greetMentors(mentor1));
console.log(greetMentors(mentor2));
console.log(greetMentors(mentor3));
console.log(greetMentors(mentor4));
console.log(greetMentors(mentor5));