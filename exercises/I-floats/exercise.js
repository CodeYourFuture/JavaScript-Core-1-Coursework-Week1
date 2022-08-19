const numberOfTrainees = 15
const numberOfMentors = 8
const total = numberOfTrainees + numberOfMentors
const pOfTrainees = Math.round((numberOfTrainees / total) * 100)
const pOfMentors = Math.round((numberOfMentors / total) * 100);
console.log(`Number of trainees: ${numberOfTrainees}`);
console.log(`Number of mentors: ${numberOfMentors}`);
console.log(`Total number of trainees and mentors: ${total}`)
console.log(`Percentage of trainees ${pOfTrainees}%`);
console.log(`Percentage of mentors ${pOfMentors}%`);
