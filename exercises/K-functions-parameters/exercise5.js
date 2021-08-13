// Declare your function here

function createLongGreeting(name, age) {
  let ageGreet;
  if (age === 1) {
    ageGreet = "year";
  } else {
    ageGreet = "years";
  }
  return (
    "Hello, my name is " + name + " and I'm " + age + " " + ageGreet + " old"
  );
}

const greeting = createLongGreeting("Daniel", 20);

console.log(greeting);
