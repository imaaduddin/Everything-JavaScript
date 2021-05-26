// closure = a function with preserved data
// give you access to an outer functions scope, from an inner function

// state of variables in outer scope are "saved"
// variables is outer scope are considered "private"



// let score = function(){
//   let points = 0;

//   return function(){
//     points += 1;
//     return points;
//   }
// }();

// console.log(score());
// console.log(score());
// console.log(score());

// closure example with arguments 

function makeSize(size) {
  return function() {
    document.body.style.fontSize = size + "px";
  }
}

let size20 = makeSize(20);
let size30 = makeSize(30);
let size40 = makeSize(40);

function makeFont(font) {
  return function() {
    document.body.style.fontFamily = font;
  }
}

let fontNameOne = makeFont("Ink Free");
let fontNameTwo = makeFont("consolas");

fontNameOne();
fontNameTwo();