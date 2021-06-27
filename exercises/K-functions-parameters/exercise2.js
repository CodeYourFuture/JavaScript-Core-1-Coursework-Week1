function divide(numOne, numTwo) {
  // Function to divide two parameters together
  return (result = numOne / numTwo);
}

// Testing by calling the function with suggested parameters
console.log(divide(3, 4));

// Testing by calling the function with two float parameters
console.log(divide(3.5, 4.7));

// Testing with calling the function with 0 as parameters, interesting
// unlike the previous multiply function which produced a 0, this
// produces a NaN...
console.log(divide(0, 0));
