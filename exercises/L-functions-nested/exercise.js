
var greet="HELLO";
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function upperCase(name){
    
    return name.toUpperCase();
}
function showName(greet,name){
    return greet +" "+ upperCase(name);
}
let result1=showName(greet,mentor1);
let result2 = showName(greet, mentor2);
let result3 = showName(greet, mentor3);
let result4 = showName(greet, mentor4);
let result5 = showName(greet, mentor5);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);