
// function(){
    
// }

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function mentorNameShout(mentor){
    return mentor.toUpperCase();
}

function greetingMentorsLoud(mentor, message){
    var getMentor = mentorNameShout(mentor);
    message = "HELLO " + getMentor;
    return message;
}

console.log(greetingMentorsLoud(mentor1));
console.log(greetingMentorsLoud(mentor2));
console.log(greetingMentorsLoud(mentor3));
console.log(greetingMentorsLoud(mentor4));
console.log(greetingMentorsLoud(mentor5));




// function shoutGreeting(message, mentor){
//     var mentors = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"]
//     for (i=0; i<mentors.length; i++) {
//         mentor = mentors[i];
//         var greeting = message + " " + mentor;
        
//         return 
//     }
    
// }