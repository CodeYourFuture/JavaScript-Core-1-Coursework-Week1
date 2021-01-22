var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function greeting(){
    var greet = "HELLO";
    return greet;
}
function nameUpperCase(){
    var cap1 = mentor1.toUpperCase();
    var cap2 = mentor2.toUpperCase();
    var cap3 = mentor3.toUpperCase();
    var cap4 = mentor4.toUpperCase();
    var cap5 = mentor5.toUpperCase();
    var message = greeting() + " " + cap1 + "\n" + greeting() + " " + cap2 + "\n" + greeting() + " " + cap3 + "\n" + greeting() + " " + cap4 + "\n" +greeting() + " " + cap5;
    return message;
}
console.log(nameUpperCase());
