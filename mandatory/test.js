function calculateSalesTax(price) {
  return price + (price * (20 / 100 ))
}
//console.log(calculateSalesTax(10));
tax = calculateSalesTax(100)
console.log(tax)