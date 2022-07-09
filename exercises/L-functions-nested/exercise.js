var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutyGreeting(name) {
  var greeting = "Hello " + name;
  return greeting.toUpperCase();
}

for (x = 1; x < 6; x++) {
  if (x == 1) {
    var greeting = shoutyGreeting(mentor1);
    console.log(greeting);
  } else if (x == 2) {
    var greeting = shoutyGreeting(mentor2);
    console.log(greeting);
  } else if (x == 3) {
    var greeting = shoutyGreeting(mentor3);
    console.log(greeting);
  } else if (x == 4) {
    var greeting = shoutyGreeting(mentor4);
    console.log(greeting);
  } else if (x == 5) {
    var greeting = shoutyGreeting(mentor5);
    console.log(greeting);
  }
}