var numberOfStudents = 15;
var numberOfMentors = 8;
var totalNumber = 23;

const quotient = numberOfStudents / totalNumber;
const product = quotient * 100;

console.log(product);

const quotientTwo = numberOfMentors / totalNumber;
const productTwo = quotientTwo * 100;

console.log(productTwo);

var precisePercentage = product;
var roughPercentage = Math.round(precisePercentage);

console.log(roughPercentage);

var precisePercentageTwo = productTwo;
var roughPercentageTwo = Math.round(precisePercentageTwo);

console.log(roughPercentageTwo);
