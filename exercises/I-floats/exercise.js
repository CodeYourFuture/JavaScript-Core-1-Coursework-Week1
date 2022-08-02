const numberOfTrainees = 15;
const numberOfMentors = 8;
const total = numberOfTrainees + numberOfMentors;
const pOfTrainees = (numberOfTrainees / total) * 100;
const pOfMentors = Math.round((numberOfMentors / total) * 100);
console.log(`Percentage of trainees ${Math.round(pOfTrainees)}%`);
console.log(`Percentage of mentors ${Math.round(pOfMentors)}%`);