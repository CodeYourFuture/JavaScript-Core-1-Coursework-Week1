/*
  Conditionals
  ---------------------------------
  Write a function that checks if a student has passed
  - if the mark is 80 or higher then the grade is "A"
  - if the mark is lower than 80 and greater than 60 then the grade is "B"
  - if the mark is 60 or lower but no lower than 50 then the grade is "C"
  - Otherwise the grade is "F"
*/

function calculateGrade(mark) {
  if (mark >= 80) {
    return "A";
  } else if (mark > 60 && mark < 80) {
    return "B";
  } else if (mark <= 60 && mark >= 50) {
    return "C";
  } else {
    return "F";
  }
}

/* 
DO NOT EDIT BELOW THIS LINE
--------------------------- */
let grade1 = 49;
let grade2 = 90;
let grade3 = 70;
let grade4 = 55;

console.log("'" + grade1 + "': " + calculateGrade(grade1));
console.log("'" + grade2 + "': " + calculateGrade(grade2));
console.log("'" + grade3 + "': " + calculateGrade(grade3));
console.log("'" + grade4 + "': " + calculateGrade(grade4));

/* 
  EXPECTED RESULT
  ---------------
  '49': F
  '90': A
  '70': B
  '55': C
  */
