// Program to calculate the percentage of students and mentors in a group.
let numberOfStudents = 15;
let numberOfMentors = 8;

// I decided to declare the variable `percentValue` first and set its value equal to the
// actual percentage value for the group size as this reduces the required nesting and hopefully
// makes the code easier follow.
let percentValue = 100 / (numberOfStudents + numberOfMentors);

// I then performed the main calculation using Math.round for both students and mentors,
// declaring and storing the results in their respective variables. Alternatively I could have calculated
// only one of the percentages then subtracted it from 100 (which I think would have been more efficient)
// but felt the spirit of the exercise was to use Math.floor so did it this way.
let percentageStudents = Math.round(percentValue * numberOfStudents);
let PercentageMentors = Math.round(percentValue * numberOfMentors);

// After declaring the variable `result`, using string literal syntax I concatenated a result string
let result = `
Percentage students: ${percentageStudents}%
Percentage mentors: ${PercentageMentors}% 
`;

// Output the result to the console
console.log(result);
