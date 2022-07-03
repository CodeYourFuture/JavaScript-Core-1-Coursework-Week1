/*
  SALES TAX
  =========
  A business requires a program that calculates how much the price of a product is including sales tax
  Sales tax is 20% of the price of the product.
*/
function calculateSalesTax(a, b,) {
  return a+b
}
const v = calculateSalesTax(15, (15/100*20))
console.log(Number(v))

const u = calculateSalesTax(17.5, (17.5/100*20))
console.log(u)

const r = calculateSalesTax(34, (34/100*20))
console.log(r)
/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that adds tax to a number, and then transforms the total into the format £0.00

  Remember that the prices must include the sales tax (hint: you already wrote a function for this!)
*/

function addTaxAndFormatCurrency(a, b,) {
  return a+b
}
const z = addTaxAndFormatCurrency(15, (15/100*20))
console.log((z).toLocaleString("en-GB", {style: "currency", currency: "EUR", minimumFractionDigits: 2}))

const x = addTaxAndFormatCurrency(17.5, (17.5/100*20))
console.log((x).toLocaleString("en-GB", {style: "currency", currency: "EUR", minimumFractionDigits: 2}))

const y = addTaxAndFormatCurrency(34, (34/100*20))
console.log((y).toLocaleString("en-GB", {style: "currency", currency: "EUR", minimumFractionDigits: 2}))


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
