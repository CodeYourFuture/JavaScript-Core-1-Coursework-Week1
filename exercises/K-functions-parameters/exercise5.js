// Declare your function here
function getAge(age){
    return age;
}
function createLongGreeting(name, age) {
  return (
    "Hello, my name is " + name + " and I am " + age + " years old."
  );
}

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);