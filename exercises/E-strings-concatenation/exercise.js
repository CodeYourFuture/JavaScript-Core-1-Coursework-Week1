// Start by creating a variable `message`

// I tried this task first with variables in an individual form, but then decided to put them all in a function

function getGreeting(name) {
  var greeting = "Hola";
  var courtesy = ", ¿cómo estás hoy?";
  var message = greeting + " " + name + courtesy;
  return message;
}
var name = "Laurita";
console.log(getGreeting(name));
