var staffNames = ["Ibrahim", "Irina", "Mimi", "Rob", "Yohannes"];
function fGreating(fName) {
  return `hello ${fName}`;
}
function createGreeting1(fName) {
  var upperGreeting = fGreating(fName).toUpperCase();
  var message = upperGreeting;
  return message;
}
function finalGreeting(mentors) {
  for (var i = 0; i < mentors.length; i++) {
    console.log(createGreeting1(mentors[i]));
  }
}
finalGreeting(staffNames);
//------------------------------------------------------
//! Another Solution
var mentor1 = "Ibrahim";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function fGreating(fName) {
  return `hello ${fName}`;
}
function createGreeting(fName) {
  var upperGreeting = fGreating(fName).toUpperCase();
  var message = upperGreeting;
  return message;
}
console.log(createGreeting(mentor1));
console.log(createGreeting(mentor2));
console.log(createGreeting(mentor3));
console.log(createGreeting(mentor4));
console.log(createGreeting(mentor5));
