var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function getUpperCase(name){
    return name.toUpperCase();
}

function greeting(name){
   nameInUpperCase = getUpperCase(name);
   const message = "Hello " + nameInUpperCase;
   return message;
}

console.log(greeting(mentor1));
console.log(greeting(mentor2));
console.log(greeting(mentor3));
console.log(greeting(mentor4));
console.log(greeting(mentor5));