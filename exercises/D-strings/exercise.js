// Program that selects one of the three basic types of variables then outputs it along with its type.
// Hopefully its ok that I added some randomness to this exercise by highlighting the three main data types, 
// If not or it causes jest to fail  I will re-write, it was fun though :)

// Declare the `messageChoice` variable, then set it to a random number between 0 and 2 rounded to the nearest integer.
let messageChoice = Math.round(Math.random() * 2);

// Declares the `message` variable.
let message;

// Determines which message to display using the random `messageChoice` value.
if (messageChoice == 0) {
  message = "This is a string";
} else if (messageChoice == 1) {
  message = 25.5;
} else {
  message = true;
}

// Declares `messageType` variable and sets it equal to  the variable `message` type (string, number or boolean)
let messageType = typeof message;

// Outputs the selected `message` and `messageType`
console.log(`
${message}
${messageType}`);
