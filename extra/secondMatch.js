const trainees = ["Ahmed", "Maria", "Atanas", "Nahidul", "Jack"];

function secondMatchesAmy(array) {
    if (trainees[1] === "Maria") {
        return "Second element matched!";
    }
    return "Second element not matched";
}
const array = secondMatchesAmy();
console.log(array);