// function expression = a function can also be defined using an expression.
// function expression can be stored in a variable 
// the variable can be used as a function 
// they can be invoked by adding ()

// 1. usefule as closures 
// 2. used in IIFE (functions that runs as soon as it's defined)
// 3. can be passed as arguments to other functions 

let greeting = function () {
  console.log("Hello");
}

console.log(greeting());