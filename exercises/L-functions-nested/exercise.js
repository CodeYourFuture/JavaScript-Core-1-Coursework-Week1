
//Your program should include a function that spells their name in uppercase, and a function that creates a shouty greeting.
//Log each greeting to the console.

// let mentor1 = "Daniel";
// let mentor2 = "Irina";
// let mentor3 = "Mimi";
// let mentor4 = "Rob";
// let mentor5 = "Yohannes";
 function upperCase(greeting, nameOfPerson){

 let text = `${greeting.toUpperCase()} ${nameOfPerson.toUpperCase()}`;
 return text;
 }
 
  console.log(upperCase("Hi", "Daniel"));
  console.log(upperCase("Hi", "Irina"));
  console.log(upperCase("Hi", "Mimi"));
  console.log(upperCase("Hi", "Rob"));
  console.log(upperCase("Hi", "Yohannes"));


