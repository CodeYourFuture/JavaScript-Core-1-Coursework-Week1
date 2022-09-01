// Start by creating a variable `greeting`

function greeting1(string, times) {
    
    if (times < 1) {
        return 0;
    }
    if(times === 1) {
        return string;
    }
    else {
        return string + greeting1(string, times-1);
    }
}
console.log(greeting1('welcome to our world!\n', 3))


