
 //Write a function that takes a name (a string) and an age (a number) and returns a greeting (a string)

// ## Expected result

//Hello, my name is Daniel and I'm 30 years old



// main function
function createGreeting (name,age){
    return "Hello, my name is " + name  + " and I'm "  + age + " years old"
}
// array of names
var array1 = ["Daniel","Irina","Mimi","Rob",
 "Yohannes"];

 function randomAge (min,max){
    return  Math.random() * (min + max) + min;  
 }
var random = array1[Math.floor(Math.random()*array1.length)]; // picks names from array
var ages = randomAge(10 , 60); // randoms age
var agesRound = Math.round(ages);  // rounds age 
const greeting = createGreeting(random,agesRound);

console.log(greeting);