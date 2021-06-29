/*
  CURRENCY CONVERSION
  ===================
  The business is breaking out into a new market and need to convert prices to USD
  Write a function that converts a price to USD (exchange rate is 1.4 $ to £)
*/

function convertGBPtoUSD(price) {
  let totalNum = price * 1.4;
  return totalNum;
}

/*
  CURRENCY CONVERSION
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real (exchange rate is 5.7 BRL to £)
  They have also decided that they should add a 1% fee to all foreign transactions, which means you only convert 99% of the £ to BRL.
*/

function convertGBPtoBRL(price) {
  let afterFee = price - price * (1 / 100);
  let totalNum = afterFee * 5.7;
  let finalNum = parseFloat(totalNum.toFixed(2));
  return finalNum;
}

/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.

To run these tests type `npm run extraTo run the tests for just this one file, type `npm run extra-tests -- --testPathPattern 1-currency-conversion` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
*/

test("convertGBPtoUSD function works for £32", () => {
  expect(convertGBPtoUSD(32)).toEqual(44.8);
});

test("convertGBPtoUSD function works for £50", () => {
  expect(convertGBPtoUSD(50)).toEqual(70);
});

test("convertGBPtoBRL function works for £30", () => {
  expect(convertGBPtoBRL(30)).toEqual(169.29);
});

test("convertGBPtoBRL function works for £1.50", () => {
  expect(convertGBPtoBRL(1.5)).toEqual(8.46);
});
