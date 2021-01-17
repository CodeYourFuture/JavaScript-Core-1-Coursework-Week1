var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
let mentors = [mentor1, mentor2, mentor3, mentor4, mentor5];

function shoutyGreeting(name) {
    return name.toUpperCase();
}

for (let i = 0; i < mentors.length; i++) {
    console.log(`HELLO ${shoutyGreeting(mentors[i])}`)
};

// Solution with ForEach method
// mentors.forEach(item => console.log(`HELLO ${shoutyGreeting(item)}`));

// Solution with Map method
// const mentorList = mentors.map(item => `HELLO ${shoutyGreeting(item)}`);
// console.log(mentorList);