var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function uppercaseNames(name) {
    let updateName = name.toUpperCase();
    return updateName;
}

function showMessage(mentor){
    let mentorName = uppercaseNames(mentor) ;
    let messageToShow = "HELLO " + mentorName;
    console.log(messageToShow)
}

showMessage(mentor1);
showMessage(mentor2);
showMessage(mentor3);
showMessage(mentor4);
showMessage(mentor5);
