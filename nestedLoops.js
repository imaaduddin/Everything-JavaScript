// nested loop = a loop inside of another loop

let symbol = window.prompt("Enter s symbol to use");
let rows = window.prompt("Enter number of rows");
let columns = window.prompt("Enter number of columns");

for (i = 0; i < rows; i ++) {
  for (j = 0; j < columns; j++) {
    document.getElementById("rectangle").innerHTML += symbol;
  }
  document.getElementById("rectangle").innerHTML += "<br>";
}