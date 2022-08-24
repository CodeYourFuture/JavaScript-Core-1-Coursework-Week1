var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperName (name) {
    let result = name.toUpperCase(); 
    return result;
}

function shoutyMessage (mentor){
    let mentorName = upperName(mentor);
    let message = "HELLO " + mentorName;
    return message;
}

console.log(shoutyMessage (mentor1));
console.log(shoutyMessage (mentor2));
console.log(shoutyMessage (mentor3));
console.log(shoutyMessage (mentor4));
console.log(shoutyMessage (mentor5));



