function nameInUppercase(name){
    return name.toUpperCase();
}

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function ShoutyGreeting(name){
    return "hello " + nameInUppercase(name)
}
console.log(ShoutyGreeting(mentor1));
console.log(ShoutyGreeting(mentor2));
console.log(ShoutyGreeting(mentor3));
console.log(ShoutyGreeting(mentor4));
console.log(ShoutyGreeting(mentor5));
