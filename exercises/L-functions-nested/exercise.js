var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function shoutyGreeting (arrayOfNames, greeting) {
    return console.log(...arrayOfNames.map((name) => `\n${greeting.toUpperCase().trim()} ${name.toUpperCase()}\n`));
}

shoutyGreeting([mentor1, mentor2, mentor3, mentor4, mentor5], `hello`);