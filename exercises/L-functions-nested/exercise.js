var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutyName(name) {
  return name.toUpperCase();
}

let mentors = [mentor1, mentor2, mentor3, mentor4, mentor5];

function shoutyGreeting() {
  for (i = 0; i < 5; i++) {
    console.log(`HELLO ${shoutyName(mentors[i])}`);
  }
}
shoutyGreeting()
