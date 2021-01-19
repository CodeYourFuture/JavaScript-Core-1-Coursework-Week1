const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Mimi";
const mentor4 = "Rob";
const mentor5 = "Yohannes";

const mentors = [mentor1, mentor2, mentor3, mentor4, mentor5];

const createShoutyGreeting = (name) => {
  const upperCaseName = (name) => name.toUpperCase();
  const greeting = "HELLO " + upperCaseName(name);
  return greeting;
};

for (const mentor of mentors) {
  console.log(createShoutyGreeting(mentor));
}
