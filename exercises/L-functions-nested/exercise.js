function  upperTocase(Name)
{
    return Name.toUpperCase();
}


function message(Name)
{
   let nameUpperCase = upperTocase(Name);
   let mess ="HELLO "+ nameUpperCase; 
  return mess;
}





var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

console.log(message(mentor1));
console.log(message(mentor2));
console.log(message(mentor3));
console.log(message(mentor4));
console.log(message(mentor5));
