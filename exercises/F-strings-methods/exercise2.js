const name = " Daniel  ";

const trimWhiteSpace = (name) => {
  let nameTrimmed = name.trim();
  let nameLength = nameTrimmed.length;

  let message = `My name is ${nameTrimmed} and my name is ${nameLength} characters long`;

  return message;
};

let result = trimWhiteSpace(name);

console.log(result);
