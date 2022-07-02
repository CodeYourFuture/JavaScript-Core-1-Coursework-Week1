// console.log("Hello world");
// console.log("Hello World. I am Kwanda");

function convertToBRL(price) {
  amount = (price - (price * 1) / 100) * 5.7;
  newAmount = amount.toFixed(2);
  return parseFloat(newAmount);
}

amount = convertToBRL(1.5);
console.log(parseFloat(amount));
