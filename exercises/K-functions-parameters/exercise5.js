function getAgeInDays(age) {
    return age * 365;
  }
  
  function createGreeting(name, age) {
    const ageInDays = getAgeInDays(age);
    const message =
      "My Name is " + name + " and I was born over " + ageInDays + " days ago!";
    return message;
  }

const greeting = createGreeting("Me", 30);

console.log(greeting);
