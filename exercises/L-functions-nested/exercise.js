var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function nameToUppercase(name) {
    return name.toUpperCase();
}

function shoutyGreet(name) {
    let shoutName = nameToUppercase(name);
    console.log(`HELLO ${shoutName}`);
    return `HELLO ${shoutName}`;
}

shoutyGreet(mentor1);
shoutyGreet(mentor2);
shoutyGreet(mentor3);
shoutyGreet(mentor4);
shoutyGreet(mentor5);
