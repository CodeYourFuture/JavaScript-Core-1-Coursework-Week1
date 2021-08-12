// var mentor1 = "Daniel";
// var mentor2 = "Irina";
// var mentor3 = "Mimi";
// var mentor4 = "Rob";
// var mentor5 = "Yohannes";

let mentors = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];

function shoutyGreeting(greet, mentName) {
  return `${greet.toUpperCase()} ${mentName.toUpperCase()}`;
}

for (i = 0; i < mentors.length; i++) {
  console.log(shoutyGreeting("hello", mentors[i]));
}
