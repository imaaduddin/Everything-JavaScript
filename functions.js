// A function is a block of code designed to perform a particular task/procedure (subroutine)

// We invoke "call" whenver we want it to do something
// We need to define wha we wnat the task to do

function hello (name, age) {
  console.log("Hello! " + name);
  console.log("You are " + age + " years old!");
};

// hello("Itachi", 19);

function toCelcius (f) {
  let result = (f - 32) * (5 / 9);
  return result;
};

function toFarenheit (c) {
  let result = (c * 9/5) + 32;
  return result;
};

let myTempInF = toFarenheit(34);
console.log(myTempInF);

let myTemp = toCelcius(8);
console.log(myTemp);