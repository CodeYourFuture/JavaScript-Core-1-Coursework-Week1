var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
//function 1//

var mentors = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];
var names;
for (var x = 0; x < mentors.length; x++) {
  names = "hello " + mentors[x];
  var greeting = names.toUpperCase();

  console.log(greeting);
}

/* function 2
function sayHello() {
  var mentors = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];
  for (var x = 0; x < mentors.length; x++) {
    var result = "hello" + callNames(x);
  }
  console.log(result);
}*/
