function participant(students, mentors) {
    var percentStudents = students / (students + mentors)*100;
    var percentMentors = mentors / (students + mentors)*100;
    return "Percentage students:" + Math.round(percentStudents) + "%" + " " + " " + " " + "Percentage mentors:" + Math.round(percentMentors) + "%";

}
var result = participant(15, 8);
console.log(result);
