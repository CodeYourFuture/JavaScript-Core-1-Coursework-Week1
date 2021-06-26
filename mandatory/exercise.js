const mentorCount = FILL_ME_IN;
const traineeCount = FILL_ME_IN;
checkIsTrue(mentorCount < traineeCount);

const capacity = FILL_ME_IN;
const people = FILL_ME_IN;
checkIsTrue(capacity > people);

const organisation = FILL_ME_IN;
checkIsTrue(typeof organisation === "string");
checkIsTrue(organisation.startsWith("Code"));
checkIsTrue(organisation.includes(" your "));
checkIsTrue(organisation.endsWith("Future!"));

const mystery = FILL_ME_IN;
checkIsTrue(typeof mystery === "boolean");
checkIsTrue(!mystery);

// Don't change anything below this point
var FILL_ME_IN;

function checkIsTrue(value1) {
    if (value1) {
        // "\x1b[32m%s\x1b[0m" will change console output to green
        console.log(
            "\x1b[32m%s\x1b[0m",
            "Yes, this expression evaluates to true! ✅"
        );
    } else {
        // "\x1b[31m%s\x1b[0m" will change console output to red
        console.log(
            "\x1b[31m%s\x1b[0m",
            "Sorry, this expression evaluates to false! ❌"
        );
    }
}