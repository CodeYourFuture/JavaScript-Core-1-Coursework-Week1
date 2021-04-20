// Declare your function here
function createGreeting(name, age) {
  const age = ageInYears(age);
  const message =
    "Hello" + "," + " my name is" + name + " and I'm 30 years old" + age;
  const greeting = createLongGreeting("Daniel", 30);
  return message;
}
console.log(greeting);
