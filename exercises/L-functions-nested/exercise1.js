let sum = 25;
 
function calcPercentage(number){
  return(Math.round(number/sum * 100));

}

function displayPercentage(name, number){
  let percent = calcPercentage(number);
  let message  = "Percentage of " + name + ":" + percent + "%"
  console.log(message);

}

displayPercentage("Students", 17);
displayPercentage("Mentors", 8);


