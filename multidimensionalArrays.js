// multidimensioanl array = Holds a matrix of elements, an array of arrays 

let garage = [
  ["C63", "E63", "S63"],
  ["i8", "X6", "M4"],
  ["R8", "RS6", "Q8"]
];

// console.log(garage[0]);

for (i = 0; i < garage.length; i++) {
  for (j = 0; j < garage[i].length; j++) {
    console.log(garage[i][j]);
  }
}