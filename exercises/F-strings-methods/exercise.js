// Start by creating a variable `message`
let myName = 'Franklin';
let nameLength = myName.length;

let message = 'My name is ' + myName + ' and my name is ' + nameLength + ' characters long.'
console.log(message);


//test
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(9));