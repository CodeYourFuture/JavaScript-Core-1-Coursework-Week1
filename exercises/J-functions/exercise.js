function halve(number) {
  // complete the function here
  return number / 2;
}

var result = halve(12);

let findPowerOf = halve(5);


console.log(result);
// trying some methods

const double = Math.pow(findPowerOf, 2);

// result should 6, because it rounds to neares integer
const roundToNearestWholeNumber = Math.round(double);
console.log(roundToNearestWholeNumber,"--Nearest Whole Number");


// rounding down
const roundDown = Math.floor(double, "--Always rounded down to whole number 6.25 to 6");
console.log(roundDown);


// round up
const roundUp = Math.ceil(double);
console.log(roundUp, "--shoulbe rounded up to 7")
