let name = ' Busra  '
let nameLength = name.trim().length;
let messageEnd = " characters long";

let messageStart = 'My name is '; 
let messageTrimmed = messageStart + name.trim() + ' and '+ messageStart.toLocaleLowerCase() + nameLength + messageEnd;

console.log(messageTrimmed);
