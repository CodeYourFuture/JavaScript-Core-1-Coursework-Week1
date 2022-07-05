/*
  Predicates
  ---------------------------------
  Write two predicate functions
  The variables should have values that match the expected results.
*/

// Finish the predicate function to test if the passed number is negative (less than zero)
function isNegative(number) {
  let checkNagative = number < 0;
  return checkNagative;
}

// Finish the predicate function to test if the passed number is between 0 and 10
function isBetweenZeroAnd10(number) {
  if (number >= 0 && number <= 10) {
    return true;
  } else {
    return false;
  }
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(`Is 5 negative? ${isNegative(5)}`);
console.log(`Is -5 negative? ${isNegative(-5)}`);
console.log(`Is 5 between 0 and 10? ${isBetweenZeroAnd10(5)}`);
console.log(`Is -5 between 0 and 10? ${isBetweenZeroAnd10(-5)}`);

/* 
  EXPECTED RESULT
  ---------------
  1. Is 5 negative? false 
  2. Is -5 negative? true 
  3. Is 5 between 0 and 10? true 
  5. Is -5 between 0 and 10? false 
*/