// Start by creating a variable `message`

let messageChoice = 0;
let messageType;
let message = "";

messageChoice = Math.round(Math.random() * 2);


if (messageChoice == 0) {
  message = "This is a string";
} else if (messageChoice == 1) {
  message = 25.5;
} else {
  message = true;
}

messageType = typeof message;

console.log(`
${message}
${messageType}`);
