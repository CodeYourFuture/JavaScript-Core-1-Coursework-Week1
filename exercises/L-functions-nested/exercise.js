function studPerc(stud, mentor){
    var total = stud + mentor;
    return Math.round((stud/total)*100) + "%";
}
function mentorPerc(stud, mentor){
    var total = stud + mentor;
    return Math.round((mentor/total)*100) + "%";
}
function message(stud, mentor){
    var studentPercentage = studPerc(stud, mentor);
    var mentorPercentage = mentorPerc(stud, mentor);
    return "Percentage students: " + studentPercentage + "\nPercentage mentors: " + mentorPercentage;
}

console.log(message(15, 8));











