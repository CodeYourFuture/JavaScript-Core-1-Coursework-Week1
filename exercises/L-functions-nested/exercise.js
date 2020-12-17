var students = 15;
var mentors = 8;
function add (students, mentors) {
    let  result = students + mentors;
    return result;
}
console.log(add(students, mentors));

function PercentageOfStudentAndMentor (students, mentors){
    let result = add(students, mentors)
    let studentPercentage = Math.round(students/ result *  100);
    let mentorPercentage = Math.round (mentors / result * 100); 
    return [studentPercentage, mentorPercentage];
}
    [percentage, stdPercent] = PercentageOfStudentAndMentor(students, mentors)

    // console.log(PercentageOfStudentAndMentor(students, mentors));
    console.log(percentage, stdPercent);

 function message (students, mentors) {
    [stdPercent, mentorPercentage] = PercentageOfStudentAndMentor(students, mentors)
    let msg = "Percentage of students : " + stdPercent + "%";
    let msg2 = " Percentage of mentors : " + mentorPercentage + "%";
    return msg + msg2; 
 }
 console.log (message (students, mentors));





// var result = 8 / total * 100; 
// console.log (Math.round(result));

// var result2 = 15/ total * 100;
// console.log (Math.round(result2));



// function mentorNames ( nameUpperCase);
//  return "Hello" + 

// var nameUpperCase = name.toUpperCase();
// console.log (nameUpperCase);
// var mentor1 = "Daniel";
// var mentor2 = "Irina";
// var mentor3 = "Mimi";
// var mentor4 = "Rob";
// var mentor5 = "Yohannes";
