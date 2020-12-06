var mentors = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];

function UpperCaseMentors(arr) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toUpperCase());
    }
    return newArr;
}

function ShoutMentors(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("Hello " + arr[i]);
    }
}
ShoutMentors(UpperCaseMentors(mentors));