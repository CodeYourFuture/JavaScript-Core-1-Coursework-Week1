const numberOfStudents = 15;
const numberOfMentors = 20;
const totalNumberOfPeople = numberOfMentors + numberOfStudents;

const GetPercentage = (number_to_get_ratio) => {
  return (number_to_get_ratio / totalNumberOfPeople) * 100;
};

const DisplayPercentage = () => {
  const studentPercentage = Math.round(GetPercentage(numberOfStudents));
  const mentorPercentage = Math.round(GetPercentage(numberOfMentors));

  console.log(`Percentage students: ${studentPercentage}%`);
  console.log(`Percentage mentors: ${mentorPercentage}%`);
};

DisplayPercentage();
