// Start by creating a variable `message`
let name = "Busra";
let nameLength = name.length;
console.log(nameLength);


let name1 = ' Busra  '
let messageStart = 'My name is '; 
let messageEnd = " characters long";
let message = messageStart + name + ' and '+ messageStart.toLocaleLowerCase() + nameLength + messageEnd;

let messageTrimmed = messageStart + name1.trim() + ' and '+ messageStart.toLocaleLowerCase() + nameLength + messageEnd;
console.log(message);
console.log(messageTrimmed);