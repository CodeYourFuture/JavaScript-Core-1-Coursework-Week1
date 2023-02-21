/*
  CURRENCY CONVERSION
  ===================
  The business is breaking out into a new market and need to convert prices to USD
  Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
*/
function convertToUSD(pound) {
  let usd = pound * 1.4;
  return usd;
  //  return "$" + pound * 1.4.toFixed(2);
}

// function convertToUSD(amountInPounds) {
//   const exchangeRate = 1.4;
//   return amountInPounds * exchangeRate;
// } // suggested in 'solutions'

// console.log(convertToUSD(200));

/*
  CURRENCY CONVERSION
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real (exchange rate is 5.7 BRL to £)
  They have also decided that they should add a 1% fee to all foreign transactions, which means you only convert 99% of the £ to BRL.
*/

function convertToBRL(pound) {
  let brl = parseFloat(((pound / 100) * 99 * 5.7).toFixed(2));
  return brl;
}

// function convertToBRL(amountInPounds) {
//   const transactionFee = 0.01;
//   const exchangeRate = 5.7;
//   const amountAfterFee = amountInPounds * (1 - transactionFee);
//   return amountAfterFee * exchangeRate;
// } //suggested in 'solutions'

// console.log(convertToBRL(10));
/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 1-currency-conversion` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
*/

test("convertToUSD function works for £32", () => {
  expect(convertToUSD(32)).toEqual(44.8);
});

test("convertToUSD function works for £50", () => {
  expect(convertToUSD(50)).toEqual(70);
});

test("convertToBRL function works for £30", () => {
  expect(convertToBRL(30)).toEqual(169.29);
});

test("convertToBRL function works for £1.50", () => {
  expect(convertToBRL(1.5)).toEqual(8.46);
});
