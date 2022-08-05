const numberOfTrainees = 15;
const numberOfMentors = 8;
const total = numberOfTrainees + numberOfMentors;
const percentOfTrainees = (numberOfTrainees / total) * 100;
const percentOfMentors = Math.round((numberOfMentors / total) * 100);
console.log(`Percentage of trainees ${Math.round(percentOfTrainees)}%`);
console.log(`Percentage of mentors ${Math.round(percentOfMentors)}%`);