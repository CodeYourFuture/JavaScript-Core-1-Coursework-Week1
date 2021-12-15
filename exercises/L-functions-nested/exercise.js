var mentor1 = 'Daniel'
var mentor2 = 'Irina'
var mentor3 = 'Mimi'
var mentor4 = 'Rob'
var mentor5 = 'Yohannes'

function greetings(name) {
    return `hello ${name}`
}

function upperCase(name) {
    return greetings(name).toUpperCase()
}

console.log(upperCase(mentor1))
console.log(upperCase(mentor2))
console.log(upperCase(mentor3))
console.log(upperCase(mentor4))
console.log(upperCase(mentor5))