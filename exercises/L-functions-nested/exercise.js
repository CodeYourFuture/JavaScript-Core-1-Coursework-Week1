
function greeting(shortGreed){
 var shortGreed= "hello"
 return shortGreed;
}

function capital(shortGreed){
    var mentor = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];
   
    //gets greeting function
    var greed = greeting(shortGreed);
    
    // loop in arrays items and convert them to uppercase
    for(i = 0;  i < mentor.length; i++){
       console.log(greed.toUpperCase(),mentor[i].toUpperCase());
     }
    return mentor;
}

// call function
capital();

function calc(numberOfStudents,numberOfMentors){
    var sum = numberOfStudents + numberOfMentors;
    var student = Math.round(numberOfStudents / sum * 100);
    var mentors = Math.round(numberOfMentors / sum * 100);
    
    //return variables as an array
    return [student,mentors] ;
}


function message(numberOfStudents,numberOfMentors){
     var  result = calc(numberOfStudents,numberOfMentors);
     var msg = "Percentage students: "  + result [0] + "%" + "\n" + "Percentage mentors: " + result[1] + "%" ;
      return msg;
}
var output = message(15,8);
console.log(output);




