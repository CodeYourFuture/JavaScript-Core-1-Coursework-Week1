/*
  CURRENCY CONVERSION
  ===================
  The business is breaking out into a new market and need to convert prices to USD
  Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
*/

function convertToUSD(numberToConvert) {
  return numberToConvert * 1.4;
}

/*
  CURRENCY CONVERSION
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real (exchange rate is 5.7 BRL to £)
  They have also decided that they should add a 1% fee to all foreign transactions, which means you only convert 99% of the £ to BRL.
*/

function convertToBRL(numberToConvert) {
  // first I do the maths for the conversion, the total number multiplied by the exchange rate then I multiply that by 0.99 to take away 1% for the transaction price. Then I use the .toFixed() method to limit this to 2 dp, but that returns a string so I convert it using the Number() function
  return Number((numberToConvert * 5.7 * 0.99).toFixed(2));
}

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `npm run extraTo run the tests for just this one file, type `npm run extra-tests -- --testPathPattern 1-syntax-errors` into your terminal
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
