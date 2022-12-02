


/*function moodChecker(mood) {
    if (mood === "Happy") {
        return 'good job, you are doing great';

    } else if (mood === "sad") {
        return "every cloud has a silver lining";
    } else if (typeof mood === "number") {
        return "beep beep boop";
    } else {
        return "i'm sorry, i'm still learning about feelings"
    }
}
*/


// console.log(moodChecker("hmm"));

// && and
// || or
// ! not 

function checkUsername(userName, userType) {
    if (userType === "admin" || userType === "manager") {
        return "username valid"
    }
    else if (userName(0) === userName(0).toUpperCase() && userName.length >5 
    && userName <10 ) {
        return "username valid";
    } else {
        return "username invalid";
    }
}

console.log(checkUsername("lexi", "admin"));

const fruits = ['banana', 'apple', 'strawberry', 'kiwi', 'fig', 'orange'];
console.log(fruits[2], fruits[3]);

/*function lastTask (tasks) {
    console.log(tasks[2]);
    console.log(tasks.length);
    return `don't forget to ${tasks[2].toUpperCase()}`
}



let tasks =['do the dishes', 'take out garbage', 'practice coding'];
console.log(lastTask(tasks)); */

function randomTask(tasks) {
    
}

let tasks = ['do the dishes', 'take out garbage', 
'practice coding', 'clean house'];
console.log(randomTask['do the dishes', 'take out garbage', 
'practice coding', 'clean house']);