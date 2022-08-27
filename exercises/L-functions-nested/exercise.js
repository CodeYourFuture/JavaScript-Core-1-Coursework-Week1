var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

  
  function createCreeting(name) {
    const upperName= name.toUpperCase();
    const message =
      "hello " + upperName;
    return message;
  }
  console.log(createCreeting(mentor1));
  console.log(createCreeting(mentor2));
  console.log(createCreeting(mentor3));
  console.log(createCreeting(mentor4));
  console.log(createCreeting(mentor5));