//exercise 1

let studs;
let mentors;

function calculatePercentage() {
var totGroup = studs + mentors;
var percentageStuds = (numberOfStudents / totalGroup) * 100;
var percentageMents = (numberOfMentors / totalGroup) * 100;

}

function FindPercentage(studs, mentors) {
  
  "The percentage of Students are " + Math.round(calculatePercentage(studs)) + "%"; 
  "The percentage of Students are " + Math.round(calculatePercentage(mentors)) + "%"; 
    
}



console.log(
  "The percentage of Students are " + Math.round(percentageStuds) + "%"
);
console.log(
  "The percentage of Mentors are " + Math.round(percentageMents) + "%"
);




- The percentage should be rounded to the nearest whole number (use a search engine to find out how to this with JavaScript)
- You should have one function that calculates the percentage, and one function that creates a message

> Consider: should your percentage function do the rounding, or should it be done when the greeting is created?


var numberOfStudents = 15;
var numberOfMentors = 8;

var totalGroup = numberOfMentors + numberOfStudents;

var percentageStuds = (numberOfStudents / totalGroup) * 100;
var percentageMents = (numberOfMentors / totalGroup) * 100;

console.log(
  "The percentage of Students are " + Math.round(percentageStuds) + "%"
);
console.log(
  "The percentage of Mentors are " + Math.round(percentageMents) + "%"
);


var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

 In `exercise.js` write a program that displays the percentage of students and mentors in the group
- The percentage should be rounded to the nearest whole number (use a search engine to find out how to this with JavaScript)
- You should have one function that calculates the percentage, and one function that creates a message

> Consider: should your percentage function do the rounding, or should it be done when the greeting is created?

## Expected result

var numberOfStudents = 15;
var numberOfMentors = 8;

#calculate percentage

#create message

function displayPercentage{
  console.log("Percentage students: " + Math.round(calculatePercentage()) +"%" )

}


```
Percentage students: 65%
Percentage mentors: 35%
```