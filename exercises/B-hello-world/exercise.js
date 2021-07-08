console.log("Hello world");
console.log("Testing console.log");
console.log("Show a lot to do.");
console.log("Amazing console that LOG");

let person1 = " Israel ";
let activity = " Skateboarding ";
let goOut = " To the park ";
let likes = "It is a person who likes";
let noLikes = "It is a person who do not likes";
let numberBig = 1324123451235;
let isTrueOr = true;
let isFalseOr = false;
let story =
  isFalseOr +
  isTrueOr +
  person1 +
  numberBig +
  noLikes +
  " play baseball" +
  " his " +
  activity +
  " is better than anything";

console.log("begin of the story");
console.log(story);

function myFunctionName() {
  console.log(goOut);
  console.log(likes);
  console.log(story);
}

console.log("the function results");
myFunctionName();

function someTest(num1, num2, num3, num4) {
  return "The numbers you gave us SUM: " + num1 + num2 + num3 + num4;
}
console.log("sum");
someTest(700, 44, 600, 100);

//Experiment
console.log("This is the test with out quotes");
console.log(
  "If you do not use quotes an error message will appear to you saying: SyntaxError: missing ) after argument list"
);
console.log(100);
console.log("Console.log works with numbers too, with out quotes");
