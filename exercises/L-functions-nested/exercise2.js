var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function greeting(){
    var greet = "HELLO";
    return greet;
}

function upperCase() {
    var capitalLetter1 = mentor1.toUpperCase();
    var capitalLetter2 = mentor2.toUpperCase();
    var capitalLetter3 = mentor3.toUpperCase();
    var capitalLetter4 = mentor4.toUpperCase();
    var capitalLetter5 = mentor5.toUpperCase();
    var mentorCap = greeting() + " " + capitalLetter1 + "\n" + greeting() + " " + capitalLetter2 + "\n" + greeting() + " " + capitalLetter3 + "\n" + greeting() + " " + capitalLetter4 + "\n" + greeting() + " " + capitalLetter5;
    return mentorCap;
}

console.log(upperCase());
