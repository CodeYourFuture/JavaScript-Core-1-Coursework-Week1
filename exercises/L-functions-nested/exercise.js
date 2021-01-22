
function percentage(num,total){
   return Math.round(num/total*100);

};

function result(num,total){
 const equal = percentage(num,total);
 return equal;

}
console.log('percentage students: '+ result(15,23)+'%');
console.log('percentage mentors: '+ result(8,23)+'%');

