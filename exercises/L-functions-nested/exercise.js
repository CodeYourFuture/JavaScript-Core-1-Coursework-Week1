// Declare and initialise global variables
var numberOfStudents = 15;
var numberOfMentors = 8;
var numberOfParticipants = numberOfStudents + numberOfMentors;
var result; // percentage calculation result
var message;    // message to be displayed 

// This function calculates percentages
function calculatePercentage(a, b) {
    return Math.round(a / b * 100); // approximate value
}

// Function to display the result of percentage calculation
function displayResult(val, desc) { // val = percentage value, desc = what the percentage is for
    var message = "Percentage of ".concat(desc+": ", val + "%");
    console.log(message);
}

// About students
result = calculatePercentage(numberOfStudents, numberOfParticipants);
message = displayResult(result, "students");

// About mentors
result = calculatePercentage(numberOfMentors, numberOfParticipants);
message = displayResult(result, "mentors");
