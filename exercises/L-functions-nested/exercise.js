var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function upperCaseName (mentor){
return mentor.toUpperCase()
}

function greeting(Hello ,name){ 
const mentor = upperCaseName(name)
return Hello.concat( mentor)
}

const Name1 = greeting("Hello " ,mentor1);
const Name2 = greeting("Hello " ,mentor2);
const Name3 = greeting("Hello " ,mentor3);
const Name4 = greeting("Hello " ,mentor4);
const Name5 = greeting("Hello " ,mentor5);

console.log (Name1);
console.log (Name2);
console.log (Name3);
console.log (Name4);
console.log (Name5);