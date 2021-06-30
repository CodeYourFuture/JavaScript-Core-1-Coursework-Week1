var mentors = ["Daniel",
    "Irina",
    "Mimi",
    "Rob",
    "Yohannes"
];

function upperCase(str) {
    return str.toUpperCase();
}

function shoutyGreeting(str) {
    return `Hello ${upperCase(str)}`;
}
for (var i = 0; i < 5; i++) {

    console.log(shoutyGreeting(mentors[i]));
}