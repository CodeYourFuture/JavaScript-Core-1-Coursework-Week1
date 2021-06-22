var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

//THIS SHOULD WORK!
function createGreeting(name) {
  var greeting = `Helloooo ${name}`;
  return greeting.toUpperCase();
}

console.log(createGreeting(mentor1));
console.log(createGreeting(mentor2));
console.log(createGreeting(mentor3));
console.log(createGreeting(mentor4));
// console.log(createGreeting(mentor5));

//UPTO HERE

// // function CreateShoutyGreeting(){
// //     return createGreeting.toUpperCase();
// // }

// CREATES ALL CAPS FOR A NAME and logs
// function createCapName(name){
//     return name.toUpperCase();
// }
// // console.log(createCapName(mentor4));

// function createShoutyGreeting(name){
//     var message = createCapName(name);
//     return `Hello ${name}`;
// }
// console.log(createShoutyGreeting(mentor4));

