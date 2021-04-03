// date object = represents a moment in time since epoch (reference point)


// date = new Date(0);
date = new Date()

console.log(date);

let year = date.getFullYear();
let month = date.getMonth();
let dayOfWeek = date.getDay();
let dayOfMonth = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milliSeconds = date.getMilliseconds();


console.log(year);

date.setFullYear(2022);
date.setMonth(12);
date.setDate(25);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);

console.log(date);