Functions are very powerful.

- You can write more than one line of code inside of functions.
- You can use variables inside of functions.
- You can call other functions inside of functions!

```js
function getAgeInDays(age) {
  return age * 365;
}

function createCreeting(name, age) {
  var ageInDays = getAgeInDays(age);
  var message =
    "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
  return message;
}
```

## Exercise 1

- In `exercise.js` you have been provided with the names of some mentors. Write a program that logs a shouty greeting to each one.
- Your program should include a function that spells their name in uppercase, and a function that creates a shouty greeting.
- Log each greeting to the console.

## Expected result

```
HELLO DANIEL
HELLO IRINA
HELLO MIMI
HELLO ROB
HELLO YOHANNES
```
