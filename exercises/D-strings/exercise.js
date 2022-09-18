// Start by creating a variable `message`
function messageType(massage) {
  return `This is a ${typeof massage} and type of ${typeof massage} is: ${typeof massage}`;
}
const message = messageType("Rebwar");
console.log(message);
console.log(messageType(5));
console.log(messageType({}));
