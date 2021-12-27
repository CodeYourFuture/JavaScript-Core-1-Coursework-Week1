/*
  SALES TAX
  =========
  A business requires a program that calculates how much the price of a product is including sales tax
  Sales tax is 20% of the price of the product.
*/
/*
1.2*price of priceOfProduct(price product INC SALES TAX)
*/

function calculateSalesTax(priceOfProduct) {

  return 0.2 * priceOfProduct;
}

/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that adds tax to a number, and then transforms the total into the format £0.00

  Remember that the prices must include the sales tax (hint: you already wrote a function for this!)
*/

function addTaxAndFormatCurrency(priceOfProduct) {
  return "£" + 0.2 * priceOfProduct;
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
expect(calculateSalesTax(90)).toEqual(18);
});

test("calculateSalesTax for £17.50", () => {
expect(calculateSalesTax(105)).toEqual(21);
});

test("calculateSalesTax for £34", () => {
expect(calculateSalesTax(204)).toEqual(40.8);
});

test("addTaxAndFormatCurrency for £15", () => {
expect(addTaxAndFormatCurrency(90)).toEqual("£18");
});

test("addTaxAndFormatCurrency for £17.50", () => {
expect(addTaxAndFormatCurrency(105)).toEqual("£21");
});

test("addTaxAndFormatCurrency for £34", () => {
expect(addTaxAndFormatCurrency(204)).toEqual("£40.80");
});
