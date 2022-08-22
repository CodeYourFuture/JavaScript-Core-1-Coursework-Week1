// Start by creating a variable `message`

function lengthOfName(name) {
  let trimeStr = name.replace(/\s/g, "");
  return `my name is ${name} and my name is ${trimeStr.length} characters long`;
}
const message = lengthOfName("Rebwar Azizi");
console.log(message);
