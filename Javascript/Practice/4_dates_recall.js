let date = new Date();
let string = date;
// console.log(typeof date);
// console.log(typeof string);

// console.log(`${string.getUTCHours()} and ${string.getUTCMinutes()}`);

let newDate= string.toISOString()
let newDate2= string.toString()
let newDate3= string.toLocaleString()
let myTimeStamp = Date.now()
console.log(newDate);
console.log(newDate2);
console.log(newDate3);
console.log(date);
console.log(myTimeStamp);

// console.log(newDate.split('/'));
// console.log(typeof newDate.split('/'));
