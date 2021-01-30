function percentage(x, y) {
return Math.round((x / y) * 100);

}

var totalStudents = percentage(15, 23); 
var totalMentors = percentage(8, 23)

function message(createMessage) {
return createMessage + totalStudents + "%";

}

let showStud = message("Percentage students: ");
let showMent = message("Percentage mentors: ");

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCase() {
    return (mentor1, mentor2, mentor3, mentor4, mentor5).toUpperCase();
}

let showMentors = upperCase();

console.log(showStud);
console.log(showMent)
console.log(showMentors)