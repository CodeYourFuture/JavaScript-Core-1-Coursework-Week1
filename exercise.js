/*function isEven (num)  {
    if (num%2 === 0) 
        return true;
    else 
        return false;

}

console.log(isEven(235))*/

function isEven (num) {
    
}


/*function moreThanSixGoal (num1, num2) {
    let total =  num1 + num2;
    if (total > 6) 
        return true; 
    else 
        return false;        

}

console.log (moreThanSixGoal(2));
console.log (moreThanSixGoal(8));*/

/*
function numberChecker(num) {
    if (num > 20) {
      return `${num} is greater than 20`;
    } else if (num === 20) {
      return `${num} is equal to 20`;
    } else if (num < 20) {
      return `${num} is less than 20`;
    } else {
      return `${num} isn't even a number :(`;
    }
  }
  
 console.log(numberChecker(10));
 console.log(numberChecker(56));


 function yourMood(message) {
     if (message === "happy") {
         return "Good job, you're doing great!";
     } else if (message ==="sad") {
        return "Every cloud has a silver lining";
     } else if (typeof message === "number") {
         return "Beep beep boop"
     } else {
         return "I'm sorry, I'm still learning about feelings!";
     }
 }

 console.log(yourMood("happy"));
 console.log(yourMood("sad"));
 console.log (yourMood("sasdfasdf"));
 */

 /*let num = 10
num > 5 && num < 15
num < 10 || num === 10
false || true
!true
let greaterThan5 = num > 5
!greaterThan5
!(num === 10)

function checkUsername (userName, userType) {
    if (userName[0] === userName[0].toUppercase()  &&  userName.length > 5 && userName < 10)  {
        return "Username valid";
    } else if (userType === "admin" || userType === "manager") {
        return "Username valid";
    } else {
        return "Username invalid";
    }
       
}

console.log(checkUsername("Irina", "admin"));
*/

/*
const fruits = ["banana", "apple", "strawberry", "kiwi", "fig", "orange"];
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[5]);
console.log(fruits[0]);
console.log(fruits[-3]);
console.log(fruits[8]);

fruits[6] = "peach";

console.log(fruits);

fruits[10] = "pear"; 
console.log(fruits);
*/

const products = ["smart phones", "chargers", "laptops", "monitors", "printers", "keyboards", "mice"]; 

function numberOfProducts(products) {
    return products.length; 
}

function inStock(myProducts, nameOfProduct) {
    for (let i = 0; i < myProducts.length; i++) {
        
        if (nameOfProduct === myProducts[i]) {
            return true
    } else {
        return false
    } 
    
}
}

console.log(inStock(products, "mice"));