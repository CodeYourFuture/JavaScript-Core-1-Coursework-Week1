const name1 = " Daniel  ";   //'name' changed to 'name1' as it becomes void as a variable when I try to add .length to it
var nameLength = name1.trim();
// console.log(nameLength.length);
var message = "My name is "
var messageMid = " and my name is "
var messageEnd = " characters long"
console.log(message + name1.trim() + messageMid + nameLength.length + messageEnd);
