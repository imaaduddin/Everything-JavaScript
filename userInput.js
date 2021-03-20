// let myName = window.prompt("What is your name?")

// console.log("Hello", myName);

document.getElementById("myButton").onclick = function () {
  let myName = document.getElementById("myText").value;
  console.log("Hello", myName);
};