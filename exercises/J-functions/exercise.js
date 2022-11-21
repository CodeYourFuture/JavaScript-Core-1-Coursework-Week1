function halve(number) {
    return number/2;
}

var result = halve(12);
console.log(result);


for(let i=0; i<4; i++) {
let x=Math.random()*100;
console.log(`the random number is ${x} and the half of this number is `+ Math.round(halve(x)) );
}
