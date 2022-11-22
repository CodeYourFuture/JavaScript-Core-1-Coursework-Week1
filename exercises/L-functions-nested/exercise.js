var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function createShoutyGreeting(mentor1, mentor2, mentor3,mentor4,mentor5){
    greeting =
      "Hello " +
      mentor1.toUpperCase() +
      "\nHello " +
      mentor2.toUpperCase() +
      "\nHello " +
      mentor3.toUpperCase() +
      "\nHello " +
      mentor4.toUpperCase() +
      "\nHello " +
      mentor5.toUpperCase();
    return greeting;

} 
console.log(createShoutyGreeting("Daniel", "Irina", "Mimi", "Rob", "Yohannes"));