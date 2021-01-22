function createLongGreeting(personName, personAge) {
  return (
    "Hello, my name is " + personName + " and I'm " + personAge + " years old"
  );
}

let greeting = createLongGreeting("Daniel", 30);
console.log(greeting);

 greeting = createLongGreeting("Negin", 32);
console.log(greeting);

 greeting = createLongGreeting("John", 110);
console.log(greeting);