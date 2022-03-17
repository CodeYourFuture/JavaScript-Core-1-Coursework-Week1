// let num = 30;

// let fee;

// fee = (1/100) * num;

// let total;

// total = num - fee;

// console.log(total);

function convertToBRL(num) {
  let brl = 5.7;
  let result;
  let fee;
  fee = (1/100) * num;
  result = (num - fee) * brl;
  return result.toFixed(2);
}

console.log(convertToBRL(30));