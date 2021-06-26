var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function hello(name) {
  return "Hello " + name;
}

function createCreeting(name1, name2, name3, name4, name5) {
  var message1 = hello(name1);
  var message2 = hello(name2);
  var message3 = hello(name3);
  var message4 = hello(name4);
  var message5 = hello(name5);
  return message1 + message2 , message3, message4, message5;
}

var greeting =  createCreeting(mentor1, mentor2, mentor3, mentor4, mentor5);
console.log(greeting);