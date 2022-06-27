let mentorNames = ["Daniel", "Irina", "Mimi", "Rob", "Yohannes"];
let arrContainer = "";
const spellNames = (arr) => {
    for (let i = 0; i < mentorNames.length; i++) {
        console.log(` HELLO ${mentorNames[i].toUpperCase()}`);
    }
};

const shoutyGreeting = () => {
    let spelledUpperCase = spellNames();
    let greeting = "HELLO" + spelledUpperCase;
    return greeting;

};
shoutyGreeting();