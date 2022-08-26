var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

let greetings = "hello "

function makeNameUpperCase (name){
    let mentorName = name.toUpperCase();
    let upperCasegreeting = greetings.toUpperCase();

    return `${upperCasegreeting} ${mentorName}`;
}
 let nameofMentor1 =makeNameUpperCase(mentor1);
 let nameofMentor2 = makeNameUpperCase(mentor2);
 let nameofMentor3 = makeNameUpperCase(mentor3);
 let nameofMentor4 = makeNameUpperCase(mentor4);
 let nameofMentor5 = makeNameUpperCase(mentor5);

 console.log(nameofMentor1);
  console.log(nameofMentor2);
   console.log(nameofMentor3);
    console.log(nameofMentor4);
     console.log(nameofMentor5);
