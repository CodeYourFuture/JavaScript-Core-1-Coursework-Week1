// Start by creating a variable `message`

// I first tried it with variables (line 5, 6, 13) and then -after the functions exercises, made a function here too (lines 8 to 13)

// var myName = 'Laurita';
// var myGreeting = 'My name is ' + myName + ' and my name is ' + myName.length + ' characters long';

function getGreeting(name) {
  var myGreeting =
    "My name is " +
    name +
    " and my name is " +
    name.length +
    " characters long";
  return myGreeting;
}
var name = "Laurita";
console.log(getGreeting(name));
