// //Create a function called isEven that should
// //take a number as an input
// // return a boolean indicating if the number is even or odd
// // Don’t use console.log inside the function itself
// // Example: isEven(100) should return true and isEven(53) should return false
// // Call your function with different arguments.
// // You don’t need to use an if statement for this exercise (we’ll get to if statements next…)

// function isEven (x) {
//     return x % 2 === 0 
// }

// console.log(isEven(5))
// console.log(isEven(8))

// // Create a function called moreThanSixGoals that should
// // take 2 numbers as input (the number of goals for each football team)
// // return a boolean value indicating if the total goals is more than 6
// // Don’t use console.log inside the function.
// // Example: moreThanSixGoals(2,3) should return false and moreThanSixGoals(5,2) should return true
// // Try calling your function with different arguments.
// // Ensure your function doesn't use an if statement for this exercise (we’ll get to if statements next…)

// function moreThanSixGoals(x, y) {
//     return x+y > 6
// }

// console.log(moreThanSixGoals(0, 5))

// console.log(moreThanSixGoals(10, 1))

// console.log(moreThanSixGoals(6, 0))

// console.log(moreThanSixGoals(7, 2))
// -



// Create a function that gives you a message depending on your mood! It should:
// take one input
// return "Good job, you're doing great!" if you pass in "happy"
// return "Every cloud has a silver lining" if you pass in "sad"
// return "Beep beep boop" if you pass in a number
// return "I'm sorry, I'm still learning about feelings!" if you pass in anything else

// function mood(x) {
//     if (x === "happy") {
//         return "Good job, you're doing great!"
//     } 
//     else if (x==="sad"){
//         return "Every cloud has a silver lining"
//     }
//     else if (typeof x==="number"){
//         return "Beep beep boop"
//     }
//     else {
//         return "I'm sorry, I'm still learning about feelings!"
//     }
// }

// console.log(mood("happy"))
// console.log(mood(5))


// If you type the following into Node Console (in order), what would you expect to see? Guess before trying it out.
// let num = 10
// num > 5 && num < 15 // true
// num < 10 || num === 10 // true
// false || true // t
// !true // false
// let greaterThan5 = num > 5 // 
// !greaterThan5 // false
// !(num === 10) //false


// In pairs, write a function that checks a username is of an acceptable format for a user type. 
// The function must:
// take two parameters: one for the username and one for the user type
// if the username starts with a capital letter and has length between 5 and 10 characters long, 
// it must return "Username valid"; otherwise, it must return "Username invalid"
// if the user type is an admin or a manager, all usernames must return "Username valid"

// function (userName, userType) {
//     if userName[0].toUppercase() ===
// }

// let a;
// console.log(a)

// const a;
// console.log(a);

// function sayHello() {
//     console.log("Hello");
// 	//no return statement
// }

// let a = sayHello();


// console.log(a);

// Create the following array:
// const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
// Using the correct index, get the following values from the array:
// strawberry
// kiwi
// orange
// banana
// Be curious! What if you use an index that doesn’t have a value? What if 
//you use a negative index? Or a string instead of a number index?

// let fuitArray = ["banana", "apple", "strawberry", "kiwi", "fig", "orange"];

// console.log(fuitArray[2]);
// console.log(fuitArray[3]);
// console.log(fuitArray[4]);
// console.log(fuitArray[5]);
// console.log(fuitArray[6]);
// console.log(fuitArray[-2]);


// We’re writing a ToDo List App. We need a function which:
// Takes an array of tasks (strings) as a parameter
// It should output the last task in the list in uppercase, after the words “Don’t forget to ”
// Hint: How do you make a string uppercase? MDN String
// Test your function:
// lastTask(['do the dishes', 'take out garbage', 'practice coding']);
// //should output: “Don't forget to PRACTICE CODING”

// 

// function toDoListApp(myArray) {
//   let lengthOf =  myArray.length;
// return "Don't forget to " + myArray[lengthOf-1]
// }

// console.log(toDoListApp(lastTask))

// Now write a function called randomTask which
// Takes an array of tasks (strings) as a parameter
// Returns a random task from the list (don’t use console.log in the function)
// Hint: Look for help here - MDN Math
// Hint: Google how to generate a random number in JavaScript
// Test your function:
// console.log(randomTask['do the dishes', 'take out garbage', 'practice coding', 'clean house']);
// //should output different tasks each time

let lastTask = ["do the dishes", "take out garbage", "practice coding"];

function randomTask (arrayOfStrings) {
    let randomElementNumber = Math.floor(Math.random()* arrayOfStrings.length)
    return arrayOfStrings[randomElementNumber]

}
 console.log(randomTask(lastTask))


// It's a simple one-liner:

// const randomElement = array[Math.floor(Math.random() * array.length)];
// For example:

// const months = ["January", "February", "March", "April", "May", "June", "July"];

// const random = Math.floor(Math.random() * months.length);
// console.log(random, months[random]);