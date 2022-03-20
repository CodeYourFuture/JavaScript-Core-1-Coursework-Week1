// exercise 2 a
var myName = `                JUDE RICKETTS                   `;
var nameLowerCase = myName.toLowerCase();
console.log(nameLowerCase.trim()); // "jude ricketts"

// exercise 2 b
let text = "                 Jude Ricketts                  ";
let result = text.replace(/^\s+|\s+$/gm, "");
console.log(result);
