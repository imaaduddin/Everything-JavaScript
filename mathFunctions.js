// Math = an object that provides basic mathematics functionality and constants 

let myNum;

// myNum = Math.round(3.5);
// myNum = Math.floor(3.9);
// myNum = Math.ceil(3.1);
// myNum = Math.pow(3, 3);
// myNum = Math.sqrt(64);
// myNum = Math.abs(-1);
// myNum = Math.min(1, 5, 6, 4 , 32, 0.7);
// myNum = Math.max(2, 45, 76, 88, 65, 45, 34);
// myNum = Math.PI;
// myNum = Math.E;

// console.log(myNum);

// solve for hypotenuse of a triangle 
let a = window.prompt("Enter side A");
let b = window.prompt("Enter side B");
let c;

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log("Side C = " + c);