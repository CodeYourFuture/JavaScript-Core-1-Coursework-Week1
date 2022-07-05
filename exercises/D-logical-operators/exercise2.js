/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(number) {
  if (number < 0) {
    return true;
  } else {
    return false;
  }
}

function isBetween5and10(number2) {
  if (number2 >= 5 && number2 <= 10) {
    return true;
  } else {
    return false;
  }
}

function isShortName(name) {
  let isNameShort = new RegExp(/^([a-z]?$)/i);
  return isNameShort.test(name);
}

function startsWithD(daniel) {
  let nameStartD = daniel[0];
  let result = nameStartD == "D";
  return result;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'?
*/
