// ## Exercise 2

//     * Log the same message using the variable, `name` provided
//         * Use the`.trim` method to remove the extra whitespace

// ## Expected result

//     ```
// My name is Daniel and my name is 6 characters long
// ```






const myName = " Daniel  ";
const nameLenght = myName.length;
const noSpaceName = myName.trim();
var message = `My name is ${noSpaceName} and my name is ${nameLenght} characters long`;
console.log(message);
