var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

/*function createGreeting(name) {
    var message = "HELLO " + name.toUpperCase();
    return message; 
}*/  // simple function

// function createGreeting() {
//     return "HELLO";
// } // works with solution 1

function createUpperCaseName(name) {
   var upperCase = name.toUpperCase();
   return upperCase;
} //works with solution 1 and 2

function createShoutyGreeting(name) {
    var greet = `HELLO ${createUpperCaseName(name)}`;
    return greet; 
}

// console.log(`${createGreeting()} ${createUpperCaseName(mentor1)}`);
// console.log(`${createGreeting()} ${createUpperCaseName(mentor2)}`);
// console.log(`${createGreeting()} ${createUpperCaseName(mentor3)}`);
// console.log(`${createGreeting()} ${createUpperCaseName(mentor4)}`);
// console.log(`${createGreeting()} ${createUpperCaseName(mentor5)}`); // solution 1

console.log(createShoutyGreeting(mentor1));
console.log(createShoutyGreeting(mentor2));
console.log(createShoutyGreeting(mentor3));
console.log(createShoutyGreeting(mentor4));
console.log(createShoutyGreeting(mentor5)); // solution 2