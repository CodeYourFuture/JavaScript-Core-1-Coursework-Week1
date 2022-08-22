function lengthTrim(name) {
  let trimeStr = name.trim();
  return `my name is ${name} and my name is ${trimeStr.length} characters long`;
}
function lengthRegEx(name) {
  let trimeStr = name.replace(/\s/g, "");
  return `my name is ${name} and my name is ${trimeStr.length} characters long`;
}
const nametrim = " Rebwar a  ";
const nameReqEx = " Rebwar a  ";
const messagetrim = lengthTrim(nametrim);
const messageRegEx = lengthRegEx(nameReqEx);
console.log(`length with trim(): ${messagetrim}`);
console.log(`length with RegExp: ${messageRegEx}`);
