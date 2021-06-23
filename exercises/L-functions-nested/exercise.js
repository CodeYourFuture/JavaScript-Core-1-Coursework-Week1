var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCase(mentor){
    return mentor.toUpperCase(); 
}

function shoutyGreeting(mentor){
    var name = upperCase(mentor);
    var message = "HELLO " + name;
    return message;
}

shoutyGreeting(mentor1);
shoutyGreeting(mentor2);
shoutyGreeting(mentor3);
shoutyGreeting(mentor4);
shoutyGreeting(mentor5);