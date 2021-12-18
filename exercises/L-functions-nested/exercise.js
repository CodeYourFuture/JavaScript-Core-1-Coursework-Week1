var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shout(hello) {
  return hello;
}

let result = shout("HELLO ");

function mentors(m1, m2, m3, m4, m5) {
  console.log(result + m1);
  console.log(result + m2);
  console.log(result + m3);
  console.log(result + m4);
  console.log(result + m5);
}

mentors(
  mentor1.toUpperCase(),
  mentor2.toUpperCase(),
  mentor3.toUpperCase(),
  mentor4.toUpperCase(),
  mentor5.toUpperCase()
);
