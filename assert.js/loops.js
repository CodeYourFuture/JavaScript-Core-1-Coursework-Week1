// const { setupMaster } = require("cluster");
function addUp(n) {
    let i = 0; /// initialisation
    let total = 0;
    while (i < n) {
      //console.log("i is " + i);
      total = total + i;
      i++; //  update
    }
    return total;
  }
//   console.log(addUp(3)); // 0 + 1 + 2 + 3 ; 


  
  function addUp(n){
    let total = 0 ;
      for(let i = 0; i < n ; i++) {
        
         

        total = total + i ;

      }
return total;
  }
  console.log(addUp(3));
  