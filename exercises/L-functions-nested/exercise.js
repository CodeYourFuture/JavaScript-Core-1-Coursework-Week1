var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutyGreeting(mentor) {
    return ("HELLO," + " " + mentor.toUpperCase() + " !")
}
console.log(shoutyGreeting(mentor1));
console.log(shoutyGreeting(mentor2));
console.log(shoutyGreeting(mentor3));
console.log(shoutyGreeting(mentor4));
console.log(shoutyGreeting(mentor5));

//    Result a shouty greeting to each one mentors:  
//     HELLO, DANIEL !
//     HELLO, IRINA !
//     HELLO, MIMI !
//     HELLO, ROB !
//     HELLO, YOHANNES !