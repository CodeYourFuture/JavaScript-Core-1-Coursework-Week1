/* Fix Functions

  Aim: to understand the change code inside functions 

  See the below functions. They are syntactically correct but are not outputting the right results.

  Run the tests and see how you can fix them.

  NOTE:Only make edits inside the function

*/

function mood() {
  let isHappy = true;

  if (isHappy) {
    return "I am happy";
  } else {
    return "I am not happy";
  }
}

function greaterThan10(num) {
  let isBigEnough;

  if (isBigEnough) {
    return "num is greater than 10";
  } else {
    return "num is not big enough";
  }
}

function get3rdIndex(arr) {
  let index = 3;
  let element;

  return element;
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("mood function works for true", () => {
  expect(mood(true)).toEqual("I am happy");
});

test("mood function works for false", () => {
  expect(mood(false)).toEqual("I am not happy");
});

test("greaterThanTen function works for value greater than 10", () => {
  expect(greaterThan10(11)).toEqual("num is greater than 10");
});

test("greaterThanTen function works for value much greater than 10", () => {
  expect(greaterThan10(96)).toEqual("num is greater than 10");
});

test("greaterThanTen function works for value less than 10", () => {
  expect(greaterThan10(9)).toEqual("num is not big enough");
});

test("greaterThanTen function works for value equal to 10", () => {
  expect(greaterThan10(10)).toEqual("num is not big enough");
});

test("get3rdIndex function works with strings", () => {
  const strings = ["fruit", "banana", "apple", "strawberry", "raspberry"];
  const copyOfOriginal = strings.slice();
  expect(get3rdIndex(strings)).toEqual("strawberry");
  // Make sure get3rdIndex didn't change its input array.
  expect(strings).toEqual(copyOfOriginal);
});

test("get3rdIndex function works with numbers", () => {
  const numbers = [11, 37, 62, 18, 19, 3, 30];
  const copyOfOriginal = numbers.slice();
  expect(get3rdIndex(numbers)).toEqual(18);
  // Make sure get3rdIndex didn't change its input array.
  expect(numbers).toEqual(copyOfOriginal);
});

test("get3rdIndex returns undefined if not enough elements", () => {
  const numbers = [5, 10];
  expect(get3rdIndex(numbers)).toBeUndefined();
});
