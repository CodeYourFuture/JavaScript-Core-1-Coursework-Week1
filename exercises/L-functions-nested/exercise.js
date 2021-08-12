var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function CreateGreeting(name) {
  return `HELLO ${name}`;
}

function ToUpper(string) {
  // right to left, so it replaces the function call with the return first, then returns that
  return CreateGreeting(string.toUpperCase());
}

console.log(ToUpper(mentor1));
console.log(ToUpper(mentor2));
console.log(ToUpper(mentor3));
console.log(ToUpper(mentor4));
console.log(ToUpper(mentor5));

console.log("\n");

// wanted to play around a little

// const mentorArray = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];

// // for every element (mentor) in the array do some logic on it
// mentorArray.forEach((mentor) => {
//   console.log(ToUpper(mentor));
// });
