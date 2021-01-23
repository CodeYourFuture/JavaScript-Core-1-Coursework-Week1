function percentage(numberOfMentors, numberOfStudents) {
    let totalNumber = numberOfMentors + numberOfStudents; 
    let studentPercentage = Math.round((numberOfStudents / totalNumber * 100)); 
    let mentorPercentage = Math.round((numberOfMentors / totalNumber * 100)); 
    function message() { 
        return `The percentage of mentors is: ${mentorPercentage} 
        \nThe percentage of students is: ${studentPercentage}`
    }    
  return message(); 
} 

console.log(percentage(8, 15)); 


