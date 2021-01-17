//- In `exercise2.js` you have been provided with the names of some mentors. Write a program that logs a shouty greeting to each one.
//- Your program should include a function that spells their name in uppercase, and a function that creates a shouty greeting.
//- Log each greeting to the console.

function shoutyGreeting(mentorName){
    return `hello ${mentorName}`.toUpperCase();
}

let mentors = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];

for (i = 0; i < 5; i++){
    console.log(shoutyGreeting(mentors[i]));
}
