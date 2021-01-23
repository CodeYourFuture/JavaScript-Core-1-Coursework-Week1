//FUNCTIONS NESTED
function percent(amount, totalValue) {
  return amount/totalValue*100;
} 
let stuPer = percent(22,30)
let mentPer = percent(8, 30)

console.log(Math.round(stuPer));
console.log(Math.round(mentPer))

function mentorGreeting(mentorName){
  let menG = "Hello! ";
  return menG + mentorName.toUpperCase();
}

console.log(mentorGreeting('Irina'));
console.log(mentorGreeting('Daniel'));
console.log(mentorGreeting('Mimi'));
console.log(mentorGreeting('Yohannes'));
console.log(mentorGreeting('Rob'));
