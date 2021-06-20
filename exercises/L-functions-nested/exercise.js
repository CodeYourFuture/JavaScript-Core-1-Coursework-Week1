var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

//function converts name to Uppercase
function createUpperCase(name){ 

    return name.toUpperCase();
}

//function generates a Shouty Message
function createGreeting(name) {

    return createUpperCase(name);

}


console.log(`HELLO ${createGreeting(mentor1)}`);
console.log(`HELLO ${createGreeting(mentor2)}`);
console.log(`HELLO ${createGreeting(mentor3)}`);
console.log(`HELLO ${createGreeting(mentor4)}`);
console.log(`HELLO ${createGreeting(mentor5)}`);





