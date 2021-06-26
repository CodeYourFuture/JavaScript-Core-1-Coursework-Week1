Type the following expressions into your Node and note the output.Anything you didn 't expect?

//let num = 10
//num > 5 && num < 15
//num < 10 || num === 10
//false || true!true
//let greaterThan5 = num > 5!greaterThan5!(num === 10)
//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

// In pairs, write afunction that checks a username is of an acceptable format for a user type.The function must:

// take two parameters: one
// for the username and one
// for the user type
// if the username starts with a capital letter and has length between 5 and 10 characters long, it must
// return "Username valid";
// otherwise, it must
// return "Username invalid"
// if the user type is an admin or a manager, all usernames must
// return "Username valid"

function checkUserName(userName, typ) {
    if (userName.length > 5 && userName.length < 10) {
        return "Woow you did it";
    } else {
        return "HEEEEY !! do you actually know what you want????";
    }
}
checkUserName("abc");