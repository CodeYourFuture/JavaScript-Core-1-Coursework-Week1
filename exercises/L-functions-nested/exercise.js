let students = { "type": "students", "number": 15};
let mentors = { "type": "mentors", "number": 8};

function calculatePercentage(a,b) {
    return Math.round(a.number / (a.number + b.number) * 100);
}

function createMessage(cat1, cat2) {
    return "Percentage " + cat1.type + ": " + calculatePercentage(cat1, cat2) + "%";
}

let percentageOfStudents = createMessage(students, mentors);
let percentageOfMentors = createMessage(mentors, students);

console.log(percentageOfStudents);
console.log(percentageOfMentors);