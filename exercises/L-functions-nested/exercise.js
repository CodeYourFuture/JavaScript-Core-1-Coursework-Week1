let mentor1 = "Daniel";     
let mentor2 = "Irina";      
let mentor3 = "Mimi";       
let mentor4 = "Rob";
let mentor5 = "Yohannes";
let greeting = "Hello ";


function greetingMentors (grt, name){   
    return grt + name;
};

let write = greetingMentors(greeting, mentor1);  
let result = write.toUpperCase();
console.log(result);

write = greetingMentors(greeting, mentor2);
result = write.toUpperCase();
console.log(result);

write = greetingMentors(greeting, mentor3);
result = write.toUpperCase();
console.log(result);

write = greetingMentors(greeting, mentor4);
result = write.toUpperCase();
console.log(result);

write = greetingMentors(greeting, mentor5);
result = write.toUpperCase();
console.log(result);

