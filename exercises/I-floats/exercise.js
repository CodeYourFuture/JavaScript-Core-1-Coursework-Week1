let numberOfStudents = 15
let numberOfMentors = 8
let numberOfTotal = numberOfStudents + numberOfMentors
console.log(
  `Percentage students: ${Math.round(
    (numberOfStudents / numberOfTotal) * 100
  )}%`
)
console.log(
  `Percentage mentors: ${Math.round((numberOfMentors / numberOfTotal) * 100)}%`
)
