// Type conversion of numbers, strings, booleans
// (Explicit vs Implicit)
// change the datatype of a value to another 

let age = window.prompt("Enter your age");

console.log("Happy Birthday!");

age = String(age);
age = Number(age);

age += 1;

console.log(typeof age);
console.log(age);

let myLet;
myLet = Boolean(null);
console.log(myLet);