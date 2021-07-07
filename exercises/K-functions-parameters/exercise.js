// Complete the function so that it takes input parameters
function multiply(x,y) {
  // Calculate the result of the function and return it
  return x*y ;
}

// Assign the result of calling the function the variable `result`
var result = multiply(3, 4);

console.log(result);

// Declare your function first
function divide(x,y){

    return x/y;
}
var result = divide(3, 4);
console.log(result);


// Write your function here
function createGreeting(name) {
  return "Hello, my name is " + name ;
}
var greeting = createGreeting("Daniel");
console.log(greeting);


// Declare your function first
function addNum(x,y) {
  return x+y ;
}
// Call the function and assign to a variable `sum`
var sum = addNum(13,124);
console.log(sum);


function nameAge(name,age) {
  return "Hello, my name is " + name +  " and I'm " + age + " years old" ;
}
// Call the function
var greeting = nameAge("Daniel", 30);
console.log(greeting);