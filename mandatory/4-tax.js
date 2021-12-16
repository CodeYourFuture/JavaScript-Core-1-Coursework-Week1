/*
  SALES TAX
  =========
  A business requires a program that calculates how much the price of a product is including sales tax
  Sales tax is 20% of the price of the product.
*/

function calculateSalesTax(price) {
  let totalPrice = price * 0.2 + price;
  return totalPrice;
}
let totalPrice = calculateSalesTax(15);
console.log(totalPrice);
let totalPrice2 = calculateSalesTax(17.50);
console.log(totalPrice2);
let totalPrice3 = calculateSalesTax(34);
console.log(totalPrice3);
 
/*
  CURRENCY FORMATTING
  ===================
  The business has informed you that prices must have 2 decimal places
  They must also start with the currency symbol
  Write a function that adds tax to a number, and then transforms the total into the format £0.00

  Remember that the prices must include the sales tax (hint: you already wrote a function for this!)
*/
// Компания сообщила вам, что цены должны иметь 2 десятичных знака.
//    Они также должны начинаться с символа валюты.
//    Напишите функцию, которая добавляет налог к числу, а затем преобразует итоговую сумму в формат 0,00 фунтов стерлингов.

//    Помните, что цены должны включать налог с продаж (подсказка: вы уже написали для этого функцию!)
function addTaxAndFormatCurrency(number) {
  // let addTax = number + totalPrice;
  // return `£${addTax}`;
  let result = `£${calculateSalesTax(number).toFixed(2) }`;
  return result
}
console.log( addTaxAndFormatCurrency(15) )
console.log( addTaxAndFormatCurrency(17.50) )
console.log( addTaxAndFormatCurrency(34) )

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
