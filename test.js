
function add(a,b) {
return a+b;
}

function multiply(a,b) {
return a*b;
}
function format(a) {
  return `£${a}`;
}

const startingValue = 2;

// Why can this code be seen as bad practice? Comment your answer.
let badCode =format(multiply(add(startingValue,10),2));
console.log(badCode);