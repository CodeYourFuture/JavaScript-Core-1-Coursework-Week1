var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";




function calc(numberOfStudents,numberOfMentors){
    var sum = numberOfStudents + numberOfMentors;
    var percentStudent = "" + Math.round(numberOfStudents / sum * 100)+ "%"+ "\n" +  Math.round(numberOfMentors / sum * 100  )+"%" ; 
    return percentStudent;

}


function message(m,numberOfStudents,numberOfMentors){
     const per = calc(numberOfStudents,numberOfMentors);
      const ms = `my name is ${personName} and i born ${ageInDays}`;
}

var g = calc(15,8);
console.log(g);





//console.log("Percentage Students: " + Math.round(percentStudent) + "%" + "\nPercentage Mentors: " + Math.round(percentMentors) + "%");

