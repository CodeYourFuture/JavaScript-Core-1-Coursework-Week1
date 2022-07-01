var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function nameToUpperCase(upperText) {
  return upperText.toUpperCase();
}

function greet(mentor1, mentor2, mentor3, mentor4, mentor5) {
  console.log(nameToUpperCase("Hi there " + mentor1));
  console.log(nameToUpperCase("Hi there " + mentor2));
  console.log(nameToUpperCase("Hi there " + mentor3));
  console.log(nameToUpperCase("Hi there " + mentor4));
  console.log(nameToUpperCase("Hi there " + mentor5));
}

greet(mentor1, mentor2, mentor3, mentor4, mentor5);
