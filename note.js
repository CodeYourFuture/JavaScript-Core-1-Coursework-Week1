function add(a,b) {
return a + b; 
}

function multiply(a ,b) {
return a * b;
}

function format(a) {
return "£" + a.toString()
}

const startingValue = 2;

// Why can this code be seen as bad practice? Comment your answer.
let badCode = add(startingValue,10); // because the name of variable is not suitable to their values

/* BETTER PRACTICE */

let goodCode = format(multiply(badCode,2));

console.log(goodCode)