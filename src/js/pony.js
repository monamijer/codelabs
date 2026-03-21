const students = ['elie', 'gerardine', 'sandra', 'abubacar', 'amnazo'];
const ages = [12, 23, 17, 13, 14, 11, 16];

const minAge = Math.min(...ages);
const [first, ...others] = students;
console.log(first);
console.log(`other list of students are as below :  ${others} and for age is ${minAge}`)
