var Student = 15;
var Mentor = 8;
//var total = 23;
//var percentStudent= 65;
//var percent = (percentStudent/100) * total;
//console.log(Math.round(percentStudent + "% of" + total + "is" + percent));
//console.log(percentStudent + "% of" + total + "is" + percent);
//var percentMentor = 35;
//var percent = (percentMentor/100) * total;
//console.log(Math.round(percentMentor + "% of" + total + "is" + percent));
//console.log(percentMentor + "% of" + total + "is" + percent);
var total = Student + Mentor;
function percentage(a,b){
    return(a/b) * 100;
}
console.log("Student percentage is" + Math.round(percentage(Student,total)) + "%");
console.log("Mentor percentage is" + Math.round(percentage(Mentor,total)) + "%");