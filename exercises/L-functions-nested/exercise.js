var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function namesToUpperCase(text) {
  return text.toUpperCase();
}

function createShoutyGreeting(name) {
  return `HELLO ${namesToUpperCase(name)}`;
}

console.log(createShoutyGreeting("Mariana"));
console.log(createShoutyGreeting("jack"));
console.log(createShoutyGreeting("David"));
console.log(createShoutyGreeting("Anna"));