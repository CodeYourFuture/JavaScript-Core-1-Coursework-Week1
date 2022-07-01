var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

var mentor1UpperCase = mentor1.toUpperCase();
var mentor1Greeting = function () {
  var shoutyMentor1 = "Hello " + mentor1UpperCase;
  return shoutyMentor1;
};

var mentor2UpperCase = mentor2.toUpperCase();
var mentor2Greeting = function () {
  var shoutyMentor2 = "Hello " + mentor2UpperCase;
  return shoutyMentor2;
};

var mentor3UpperCase = mentor3.toUpperCase();

var mentor3Greeting = function () {
  var shoutyMentor3 = "Hello " + mentor3UpperCase;
  return shoutyMentor3;
};

var mentor4UpperCase = mentor4.toUpperCase();
var mentor4Greeting = function () {
  var shoutyMentor4 = "Hello " + mentor4UpperCase;
  return shoutyMentor4;
};
var mentor5UpperCase = mentor5.toUpperCase();
var mentor5Greeting = function () {
  var shoutyMentor5 = "Hello " + mentor5UpperCase;
  return shoutyMentor5;
};

var shouty = function () {
  console.log(mentor1Greeting());
  console.log(mentor2Greeting());
  console.log(mentor3Greeting());
  console.log(mentor4Greeting());
  console.log(mentor5Greeting());
};

shouty();
