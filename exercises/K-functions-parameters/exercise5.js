// Declare your function here

function createLongGreeting(string,number) {
    return "Hello, my name is " + string + " and I'm " + number + " years old";
}

const greeting = createLongGreeting("Daniel", 30);

console.log(greeting);

https://github.com/CodeYourFuture/JavaScript-Core-1-Coursework-Week1/tree/master/exercises/L-functions-nested 

function UpperCase(string) {
  return string.toUpperCase();
}

function shoutyGreeting(name) {
   let message = "HELLO " + UpperCase(name);
  return message;
}

let mentor1 = "Daniel";
let mentor2 = "Irina";
let mentor3 = "Mimi";
let mentor4 = "Rob";
let mentor5 = "Yohannes";
console.log(shoutyGreeting(mentor1));
console.log(shoutyGreeting(mentor2));
console.log(shoutyGreeting(mentor3));
console.log(shoutyGreeting(mentor4));
console.log(shoutyGreeting(mentor5));

