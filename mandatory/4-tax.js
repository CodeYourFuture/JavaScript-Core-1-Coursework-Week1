/*
  SALES TAX
  =========
  A business requires a program that calculates how much sales tax to charge
  Sales tax is 20% of the price of the product
*/

/***** Quick Note *******
 * The function below fails the tests. However, it meets the requirements (lines 4 and 5) 
 * and has no logic errors (I hope).
 * I hope the suggestion I made (starts at line 35) can explain why. */

function calculateSalesTax(price) {
    return price / 5;   // tax = 20% of price
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
    let tax = calculateSalesTax(price);
    let actualPrice = price + tax;
    return "£" + actualPrice.toFixed(2);
}

/*
 ========================= THIS IS A SUGGESTION ============================
 * I suggest calls made to the function calculateSalesTax (lines 70 through 72) be 
 * edited for values: calculateSalesTax() should return the tax (i.e. 20% of product
 * price, as stipulated in lines 4 and 5 above), not the value of price + tax. 
 * 
 * It's possible to make calculateSalesTax() calculate the total price to pass the tests,
 * but that does seem counterintuitive to what we expect the function does.
 ============================================================================ */

const { format } = require("path");
/* 
===================================================
======= TESTS - DO NOT MODIFY BELOW THIS LINE =====

There are some Tests in this file that will help you work out if your code is working.

To run these tests type `node 4-tax.js` into your terminal

===================================================
*/

const util = require("util");

function test(test_name, actual, expected) {
  let status;
  if (actual === expected) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("calculateSalesTax function - case 1 works", calculateSalesTax(15), 18);
test("calculateSalesTax function - case 2 works", calculateSalesTax(17.5), 21);
test("calculateSalesTax function - case 3 works", calculateSalesTax(34), 40.8);

test(
  "addTaxAndFormatCurrency function - case 1 works",
  addTaxAndFormatCurrency(15),
  "£18.00"
);
test(
  "addTaxAndFormatCurrency function - case 2 works",
  addTaxAndFormatCurrency(17.5),
  "£21.00"
);
test(
  "addTaxAndFormatCurrency function - case 3 works",
  addTaxAndFormatCurrency(34),
  "£40.80"
);
