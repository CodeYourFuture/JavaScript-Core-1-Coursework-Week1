const mentor1 = "Daniel";
const mentor2 = "Irina";
const mentor3 = "Mimi";
const mentor4 = "Rob";
const mentor5 = "Yohannes";


function createShoutyGreeting (name) {
    name = name.toUpperCase();
    console.log(`HELLO ${name}`);
}

createShoutyGreeting(mentor1);
createShoutyGreeting(mentor2);
createShoutyGreeting(mentor3);
createShoutyGreeting(mentor4);
createShoutyGreeting(mentor5);




// Another way of doing the exercise
/*
function nameInUpperCase(name) {
    return name.toUpperCase();
}

function createShoutyGreeting() {
    const name1 = nameInUpperCase(mentor1);
    const name2 = nameInUpperCase(mentor2);
    const name3 = nameInUpperCase(mentor3);
    const name4 = nameInUpperCase(mentor4);
    const name5 = nameInUpperCase(mentor5);
    console.log(`HELLO ${name1}`);
    console.log(`HELLO ${name2}`);
    console.log(`HELLO ${name3}`);
    console.log(`HELLO ${name4}`);
    console.log(`HELLO ${name5}`);
}

createShoutyGreeting();
*/

