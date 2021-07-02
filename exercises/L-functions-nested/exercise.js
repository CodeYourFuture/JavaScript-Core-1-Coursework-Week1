var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function upper(mentor) {
    return mentor.toUpperCase();
}

function shoutyGreetings(mentor) {
    let mentorInUpper = upper(mentor);
    let greetings = "HELLO " + mentorInUpper;
    return greetings;
}

console.log(shoutyGreetings(mentor1));
console.log(shoutyGreetings(mentor2));
console.log(shoutyGreetings(mentor3));
console.log(shoutyGreetings(mentor4));
console.log(shoutyGreetings(mentor5));

// console.log("This Part is done with loops");
// // using loops
// function shoutyGreetingsLoop(mentors) {
//     for (let i = 0; i < mentors.length; i++) {
//         mentors[i] = mentors[i].toUpperCase();
//         console.log("HELLO " + mentors[i]);
//     }
// }

// let mentors = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];
// let greetings = shoutyGreetingsLoop(mentors);