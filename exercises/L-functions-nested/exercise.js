let mentor1 = " Daniel";
let mentor2 = " Irina";
let mentor3 = " Mimi";
let mentor4 = " Rob";
let mentor5 = " Yohannes";

function shoutName (mentor) {
    return mentor.toUpperCase();
}

function shoutGreeting (mentor) {
    let greeting = 'HELLO';
    return greeting  +  shoutName(mentor);
}

 console.log(shoutGreeting(mentor1));
 console.log(shoutGreeting(mentor2));
 console.log(shoutGreeting(mentor3));
 console.log(shoutGreeting(mentor4));
 console.log(shoutGreeting(mentor5));
