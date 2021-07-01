let mentors = ["Daniel","Irina", "Mimi", "Rob", "Yohannes" ];
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function uppercaseName(name){
    return name.toUpperCase();
}
function shoutyGreeting(name){
    let greeting = "HELLO " + name;
    return greeting;
}
// console.log(shoutyGreeting(uppercaseName(mentor1)));


for (i = 0; i <= mentors.length; i++){
    console.log(shoutyGreeting(uppercaseName(mentors[i])));
}
// Not sure why it says Process exited with code 1 - is it because of the .toUpperCase function?