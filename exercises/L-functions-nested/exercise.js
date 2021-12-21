let mentor1 = "Daniel";
let mentor2 = "Irina";
let mentor3 = "Mimi";
let mentor4 = "Rob";
let mentor5 = "Yohannes";

function greeting (mentorName){
    let capitalizedName = uppercase(mentorName);
    return "HELLO" + capitalizedName;
}

function uppercase(str){
    return str.toUpperCase();
}

const greetMentor1= greeting(mentor1);
const greetMentor2 = greeting(mentor2);
const greetMentor3 = greeting(mentor3);
const greetMentor4 = greeting(mentor4);
const greetMentor5 = greeting(mentor5);

 console.log(greetMentor1)
 console.log(greetMentor2)
 console.log(greetMentor3)
 console.log(greetMentor4)
 console.log(greetMentor5)
