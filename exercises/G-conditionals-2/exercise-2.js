/*
  Conditionals
  ---------------------------------
  Write a function that checks if a student has passed
  - if the grade is less than 50 then return "failed"
  - if 50 or higher then return "passed"

*/

function studentPassed(grade) {
  if (grade >= 50) {
    return "Passed";
  } else {
    return "Failed";
  }
}

/* 
DO NOT EDIT BELOW THIS LINE
--------------------------- */
let grade1 = 49;
let grade2 = 50;
let grade3 = 100;

console.log("'" + grade1 + "': " + studentPassed(grade1));
console.log("'" + grade2 + "': " + studentPassed(grade2));
console.log("'" + grade3 + "': " + studentPassed(grade3));

/* 
EXPECTED RESULT
---------------
'49': failed
'50': passed
'100': passed
*/
