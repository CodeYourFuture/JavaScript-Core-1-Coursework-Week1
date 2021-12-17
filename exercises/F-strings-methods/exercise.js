// Start by creating a variable `message`
let name = "Busra";
let nameLength = name.length;

let messageStart = 'My name is '; 
let messageEnd = " characters long";
let message = messageStart + name + ' and '+ messageStart.toLocaleLowerCase() + nameLength + messageEnd;

console.log(message);
