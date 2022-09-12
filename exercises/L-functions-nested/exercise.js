var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function upperCase(greeting, name)
{
    let message = greeting.toUpperCase() + name.toUpperCase();
    return message;

}
var greet = "Hello ";
console.log(upperCase( greet, mentor1));
console.log(upperCase( greet, mentor2));
console.log(upperCase( greet, mentor3));
console.log(upperCase( greet, mentor4));
console.log(upperCase( greet, mentor5));
