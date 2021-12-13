// Start by creating a variable `message` //
let message = "This is a string";
console.log(message);

// - Write a program that logs a message and its type //
const returnDataType = (data) => {
  return `This is a data type of ${typeof data}`;
}

let result = returnDataType(message);
console.log(result);

