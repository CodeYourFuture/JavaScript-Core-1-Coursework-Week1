// I hope the way I have solved this exercise is ok although the readme seemed to have
// some wiggle room (hope jest does!) but happy to redo if needed as I enjoyed thinking
// of an alternative solution. As its the last exercise I wanted to try and be a bit creative
// so to solve this I have put the pre-defined mentor names into an array then iterated
// through it using a for loop which contains two nested ES6 arrow functions with omitted
// return and curly brackets as they are on one line. Had great fun figuring out how to
// solve it like this:)

let mentors = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];

for (let i = 0; i < mentors.length; i++) {
  let mentor = mentors[i];
  const getNameInUpperCase = (mentor) => mentor.toUpperCase();
  const shoutyGreeting = (mentor) => `HELLO ${getNameInUpperCase(mentor)}`;
  console.log(shoutyGreeting(mentor));
}
