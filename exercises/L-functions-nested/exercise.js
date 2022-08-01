function greeting(str){
    
    if(str==mentor1){
        var message= "hello"+" "+ mentor1;
        return message.toUpperCase();
    } else if(str==mentor2) {
        var message= "hello"+" "+ mentor2;
        return message.toUpperCase();
    } else if(str==mentor3) {
        var message= "hello"+" "+ mentor3;
        return message.toUpperCase();
    }else if(str==mentor4) {
        var message= "hello"+" "+ mentor4
        return message.toUpperCase();
    }else if(str==mentor5) {
        var message= "hello"+" "+ mentor5
        return message.toUpperCase();
    }
}
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
console.log(greeting(mentor1));
console.log(greeting(mentor2));
console.log(greeting(mentor3));
console.log(greeting(mentor4));
console.log(greeting(mentor5));