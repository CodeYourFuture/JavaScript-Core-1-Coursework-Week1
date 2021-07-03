function createLongGreeting(inputname, age) {
  return (
    "Hello my name is" + " " + inputname + " and Iam " + age + " " + "years old"
  );
}

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);
