// const assert = require("assert");

// const mentorCount = 30;
// const studentCount = 60;
// assert(mentorCount < studentCount);

// const capacity = 25;
// const people = 3;
// assert(capacity > people);

// const name1 = "Mary";
// const name2 = "Mary";
// assert(name1 === name2);

// const number1 = 6;
// const number2 = "6";
// assert(number1 !== number2);

// const thisNumber = 6;
// const thatNumber = 6;
// assert(thisNumber === thatNumber);

// const thisArray = [1, 2, 3, 4, 5];
// const thatArray = thisArray;
// assert(thisArray === thatArray);


// function username (personName, personType) {
//     if ( personName.charAt(0) === personName.charAt(0).toUpperCase() && personName.length >= 5 && personName.length <= 10) {
//         return "username valid";
//     } else  {
//         return"username invalid";
//     }
// }

// function addNumber(num) {
//     let i = 0;
//     let sum = 0;
//     while(i <= num) {
//         sum = sum+i;
//         i++;
//     } 
//     return sum
// }




function loop(array){
    for (i = 0; i< array.length; i++) {
        console.log(array[i]);
    }
}


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

loop (daysOfWeek);

