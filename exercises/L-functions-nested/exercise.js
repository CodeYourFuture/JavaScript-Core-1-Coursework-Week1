var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
// var mentor5 = "Yohannes";

function percentageCalculator(people,num, total){ 
    let percent=(num/total)*100;
function message(){
   return "percentage " +people+ ": "+percent+ "%";
}
return message();
}
console.log(percentageCalculator("mentors",12,16));