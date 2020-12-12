let Student = 41;
let Mentor = 10;
let total =Student + Mentor;
function percentage(a,b){

    return(a/b)*100;
}
//var total = percentage(Student,Mentor);
console.log("Student percentage is  " + Math.round(percentage(Student,total)) + "%");
console.log(`Mentor percentage is  ${Math.round(percentage(Mentor, total))}%`);