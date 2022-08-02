var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

const names = [];
names.push(mentor1, mentor2, mentor3, mentor4, mentor5); 
//console.log(names.length);

function shouty(nam) {
    //nam = "G'day " + mentor1 + "!";
    nam= `G'day ${names[0]} !`;
    return nam.toUpperCase();
   
   // }

   
    
}
for (let i = 0 ; i < names.length; i++) {
console.log(shouty());
names.shift();
i--;  // shift shorts array length
};
