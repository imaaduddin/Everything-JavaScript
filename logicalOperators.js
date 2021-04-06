// logical operators = used to write more complex conditions 

// && and (checks if both conditions are true)
// || or (checks if at least one condition is true)
// ! not (reverses boolean value)


let temperature = 66; // in F

if (temperature > 70 && temperature <= 85) {
  console.log("It's warm outside!");
} else if (temperature > 60 && temperature <= 70) {
  console.log("This is the perfect weather!");
} else {
  console.log("Not a fan of this weather...");
}

let hour = 20; // military time 

if (hour < 6 || hour >= 20) {
  console.log("It's DARK outside!");
} else {
  console.log("It's LIGHT outside!");
}

let myName = window.prompt("Enter your name");

if (!(myName === "")) {
  console.log("Hello " + myName);
} else {
  console.log("You did not enter your name!");
}