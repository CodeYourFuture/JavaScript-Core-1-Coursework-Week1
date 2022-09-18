// Start by creating a variable `greeting`
let greeting = "Hello world!";
console.log(greeting.repeat(3));
greeting = ["Hello world!", "Hello world!", "Hello world!"];
function repeat3Time(greeting) {
  return greeting.map((str) => str);
}
const result = repeat3Time(greeting);
console.log(...result);
