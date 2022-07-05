/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

let name = "Daniel";
let danielsRole = "mentor";

function checkRole() {
  if ((danielsRole = Mentor)) {
    let result = "Hi, I'm Daniel, I'm a mentor";
    return result;
    // Additional
  } else if ((danielsRole = "none")) {
    let result = "Hi, I'm Daniel, I'm not involved in CYF";
    return result;
  } else {
    let result = "Hi, I'm Daniel, I'm a student";
    return result;
  }
}



/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
