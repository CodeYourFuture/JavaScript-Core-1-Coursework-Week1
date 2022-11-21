
function upper(name){
    return name.toUpperCase();
}

function GreetingMentors(name){
    return `Hello ${upper(name)}`;
}

function print(name){
    console.log(GreetingMentors(name));
}

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

print(mentor1);
print(mentor2);
print(mentor3);
print(mentor4);
print(mentor5);;
