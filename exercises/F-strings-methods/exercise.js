// Start by creating a variable `message` //
let nameOfPerson = "Daniel";
console.log(nameOfPerson);

// - Log a message that includes the length of your name //

const returnLengthOfName = (name) => {
  let message = `My name is ${name} and my name is ${name.length} characters long`;
  return message;
}

let result = returnLengthOfName(nameOfPerson);
console.log(result);


