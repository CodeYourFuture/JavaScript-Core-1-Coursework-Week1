var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCase(a) {
    return a.toUpperCase();
}
let upperMentor1 = upperCase(mentor1)


function greeting(a, b, c ,d ,e) {
            
    return "HELLO " +upperMentor1+"\n" + "HELLO " +b+ "\n"+ "HELLO " +c+"\n"+"HELLO " +d+"\n" +"HELLO " +e+"\n";
    
}

let greetings = greeting(mentor1,mentor2,mentor3,mentor4,mentor5);

console.log(greetings)