const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Mimi";
const mentor4 = "Rob";
const mentor5 = "Yohannes";
const names = [mentor1, mentor2, mentor3, mentor4, mentor5];
function upperCase(name) {
  return name.toUpperCase();
}

function shouty(shout, name) {
  const makeUppercase = upperCase(name);
  return shout.concat(makeUppercase);
}
const printName1 = shouty("HELLO ", mentor1);
const printName2 = shouty("HELLO ", mentor2);
const printName3 = shouty("HELLO ", mentor3);
const printName4 = shouty("HELLO ", mentor4);
const printName5 = shouty("HELLO ", mentor5);
console.log(printName1);
console.log(printName2);
console.log(printName3);
console.log(printName4);
console.log(printName5);
