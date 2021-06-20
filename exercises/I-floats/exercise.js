var numberOfStudents = 15;
var numberOfMentors = 8;


// var preciseAge = 30.612437;
// var roughAge = Math.round(preciseAge);
// console.log(roughAge);

var proportionStudents = (numberOfStudents / (numberOfStudents + numberOfMentors)) *100;
console.log(proportionStudents);
var roughProportionStudents = Math.round(proportionStudents);
console.log(roughProportionStudents);

var proportionMentors = (numberOfMentors / (numberOfStudents + numberOfMentors)) *100;
console.log(proportionMentors);
var roughProportionMentors = Math.round(proportionMentors);
console.log(roughProportionMentors);