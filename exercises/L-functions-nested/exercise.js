var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutGreeting(name){
  var bigName = name.toUpperCase();
  return "HELLO "  +  bigName;
}
var greet1 = shoutGreeting( mentor1 );
var greet2 = shoutGreeting( mentor2 );
var greet3 = shoutGreeting( mentor3 );
var greet4 = shoutGreeting( mentor4 );
var greet5 = shoutGreeting( mentor5 );
console.log( greet1 );
console.log( greet2 );
console.log( greet3 );
console.log( greet4 );
console.log( greet5 );
