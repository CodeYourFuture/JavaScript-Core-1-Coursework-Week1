/*
  SALES TAX
  =========
  A business requires a program that calculates how much the price of a product is including sales tax
  Sales tax is 20% of the price of the product.
*/
function calculateSalesTax(unformattedSum) {
  //adds 20% to the original sum
  return taxedSum = ((unformattedSum/100)*20) + unformattedSum;
}

function addTaxAndFormatCurrency(taxedSum) {
  //should add £ and limit to 2 decimal places
  let a = calculateSalesTax(taxedSum).toFixed(2);
  return `£${a}`;
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
