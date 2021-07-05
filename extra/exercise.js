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