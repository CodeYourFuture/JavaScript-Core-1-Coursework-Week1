var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function createGreeting(mentor) {
  return "hello " + mentor;
}

function greetingInUpperCase(mentor) {
  var greeting = createGreeting(mentor);
  return (greeting = greeting.toLocaleUpperCase());
}

//var greeting = createGreeting(mentor1);

console.log(greetingInUpperCase(mentor1));
console.log(greetingInUpperCase(mentor2));
console.log(greetingInUpperCase(mentor3));
console.log(greetingInUpperCase(mentor4));
console.log(greetingInUpperCase(mentor5));
