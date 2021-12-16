let mentor1 = "Daniel";
let mentor2 = "Irina";
let mentor3 = "Mimi";
let mentor4 = "Rob";
let mentor5 = "Yohannes";

let greetings = function(){
    return `HELLO`
}
let names = function(name){
    let names = name.toUpperCase()
    console.log(`${greetings()} ${names}`)
}
names(mentor1)
names(mentor2)
names(mentor3)
names(mentor4)
names(mentor5)
