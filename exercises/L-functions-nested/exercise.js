let mentors=[
    "Daniel",
    "Irina",
    "Mimi",
    "Rob",
    "Yohannes"
  ];
  let message= 'hello'
  function createCreeting(a) {
    for (let i = 0; i < mentors.length; i++) {
      console.log( message +' '+ mentors[i])
    }
  }
  console.log(createCreeting());