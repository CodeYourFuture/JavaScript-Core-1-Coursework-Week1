
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function uppercaseName(name){
    var updatedName = name.toUpperCase();
    return updatedName;
}

function shouti(mentor){
    var mentorName = uppercaseName(mentor);
    var message = "Hello " + mentorName;
    console.log(message);
}
shouti(mentor1);
shouti(mentor2);
shouti(mentor3);
shouti(mentor4);
shouti(mentor5);


