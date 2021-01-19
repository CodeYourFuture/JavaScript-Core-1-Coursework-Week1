var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function spellNameUpperCase(firstName) {
    return firstName.toUpperCase();
}

function createShoutyGreeting(firstName) {
    var message = "HELLO " + spellNameUpperCase(firstName);
    return message;
}

console.log (createShoutyGreeting("Daniel"));
console.log (createShoutyGreeting("Irina"));
console.log (createShoutyGreeting("Mimi"));
console.log (createShoutyGreeting("Rob"));
console.log (createShoutyGreeting("Yohannes"));

