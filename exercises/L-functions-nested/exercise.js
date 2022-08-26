var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
 function upperCaseName ( mentor ){
 return mentor.toUpperCase( )
 }
 function greeting( hi,name){
    const mentor = upperCaseName(name)
    return hi.concat( mentor)
 }
 const printName1= greeting("Hello ",mentor1);
 const printName2= greeting("Hello " ,mentor2);
 const printName3= greeting("Hello " ,mentor3);
 const printName4= greeting("Hello " ,mentor4);
 const printName5= greeting("Hello " ,mentor5);
 console.log (printName1);
 console.log (printName2);
 console.log (printName3);
 console.log (printName4);
 console.log (printName5);


 