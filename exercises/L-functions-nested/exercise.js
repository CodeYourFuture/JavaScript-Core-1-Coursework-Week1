var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
let mentors = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];
for (let i = 0; i < mentors.length; i++) {
    let mentor = mentors[i];
    const getNameInUpperCase = (mentor) => mentor.toUpperCase();
    const shoutyGreeting = (mentor) => `HELLO ${getNameInUpperCase(mentor)}`;
    console.log(shoutyGreeting(mentor));
  }