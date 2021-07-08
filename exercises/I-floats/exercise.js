// Program to calculate the percentage of students and mentors in a group.

// Declare and initialise variables
let numberOfStudents = 15;
let numberOfMentors = 8;
let percentValue = 0;
let percentageStudents = 0;
let PercentageMentors = 0;
let result = "";

// Set `percentValue` value equal to the actual percentage value for the group size as
// this reduces the required nesting and hopefully makes the code easier read.
percentValue = 100 / (numberOfStudents + numberOfMentors);

// Performed main calculations using Math.round for both students and mentors,
// storing the results in their respective variables. Alternatively I could have calculated
// only one of the percentages then subtracted it from 100 (which I think would have been more efficient)
// but felt the spirit of the exercise was to use Math.floor so did it this way.
percentageStudents = Math.round(percentValue * numberOfStudents);
PercentageMentors = Math.round(percentValue * numberOfMentors);

// String literal syntax is used to concatenated a `result` string
result = `
Percentage students: ${percentageStudents}%
Percentage mentors: ${PercentageMentors}% 
`;

// Output the result to the console
console.log(result);
