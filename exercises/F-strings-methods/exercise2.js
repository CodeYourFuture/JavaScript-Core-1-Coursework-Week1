const fName = " Daniel  ";
// storing "trim" method into a varialble
const withoutSpace = fName.trim();

// trying to console them at once
console.log(
  `The original message is "${fName}", and ${fName.length} characters long, including white spaces which JS counts as character.`
);
console.log(
  `After varialble.trim() method, here is how it looks "${withoutSpace}", and ${withoutSpace.length} characters long`
);
