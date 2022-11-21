/*
  SALES TAX
  =========
  A business requires a program that calculates how much the price of a product is including sales tax
  Sales tax is 20% of the price of the product.
*/

function calculateSalesTax(price) {
  let tax = (price * 20) / 100;
  return price + tax;
}

/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that adds tax to a number, and then transforms the total into the format £0.00

  Remember that the prices must include the sales tax (hint: you already wrote a function for this!)
*/

function addTaxAndFormatCurrency(price) {
  //calculating the price with tax
  let priceIncludingTax = calculateSalesTax(price);
  //writing a function to find out if a number has number after dot, if yes => how many numbers
  let countDecimals = (number) =>
    Math.floor(number) !== number ? number.toString().split(".")[1].length : 0;
  //finding out amount of numbers after dot
  let amountOfDecimals = countDecimals(priceIncludingTax);
  //returning the result
  return amountOfDecimals === 0
    ? `£${priceIncludingTax}.00`
    : amountOfDecimals === 1
    ? `£${priceIncludingTax}0`
    : `£${priceIncludingTax}`;
}
/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run the tests for just this one file, type `npm test -- --testPathPattern 4-tax` into your terminal
(Reminder: You must have run `npm install` one time before this will work!)
===================================================
*/

test("calculateSalesTax for £15", () => {
  expect(calculateSalesTax(15)).toEqual(18);
});

test("calculateSalesTax for £17.50", () => {
  expect(calculateSalesTax(17.5)).toEqual(21);
});

test("calculateSalesTax for £34", () => {
  expect(calculateSalesTax(34)).toEqual(40.8);
});

test("addTaxAndFormatCurrency for £15", () => {
  expect(addTaxAndFormatCurrency(15)).toEqual("£18.00");
});

test("addTaxAndFormatCurrency for £17.50", () => {
  expect(addTaxAndFormatCurrency(17.5)).toEqual("£21.00");
});

test("addTaxAndFormatCurrency for £34", () => {
  expect(addTaxAndFormatCurrency(34)).toEqual("£40.80");
});
