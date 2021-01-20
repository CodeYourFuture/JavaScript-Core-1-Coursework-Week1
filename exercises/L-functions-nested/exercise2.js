// I got rid of the original list of variables and made it into an array below

// Created a nested function, the first one turns letters upper case and the second one displays the greeting to the mentors
function capitalisedString(message) {
  let capitalisedShoutOut = message.toUpperCase();
  return capitalisedShoutOut;
}
function shoutOut(theMentors) {
  for (i = 0; i < theMentors.length; i++) {
    let shoutOut = "Hello " + theMentors[i];
    let capitalisedShoutOut = capitalisedString(shoutOut);
    console.log(capitalisedShoutOut);
  }
}
let theMentors = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];
shoutOut(theMentors);
// Once you specify the array of names, you can use the function (line 22)
