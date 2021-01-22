// Declare your function here

function createLongGreeting(str, integer){
    var convert = "Hello my name is " + str + " and I'm " + String(integer) + " years old" ;
    return convert
}

const greeting = createLongGreeting("Daniel", 30);
console.log(greeting);
